class featureApi {
  constructor(queryUser, model) {
    this.queryUser = queryUser;
    this.model = model;
  }
  filter() {
    // 1.----------------Filter----------------

    // a.Basic filter
    // const data = await Tour.find(req.query);

    // b.Advanced filter
    // duration[gt]=20 userdan shunaqa yiziladi
    // duration[?gt]=20 biz uni oldiga soroq qoyib jonatamiza

    const rootQuery = ["field", "pagination", "filter", "sort"];

    let query = { ...this.queryUser };

    rootQuery.forEach((val) => {
      delete query[val];
    });

    query = JSON.stringify(query);

    query = query.replace(/\bgt|gte|lt|lte\b/g, (val) => `$${val}`);

    query = JSON.parse(query);

    this.model = this.model.find(query);
    return this;
  }
  sort() {
    if (this.queryUser.sort) {
      // ?sort=duration,rating ni user yozsa biz sortni ichiga shuni vergulsiz qilib tashash kerak
      const boshJoylikQuery = this.queryUser.sort.split(",").join(" ");
      this.model = this.model.sort(boshJoylikQuery);
    }
    return this;
  }
  field() {
    if (this.queryUser.field) {
      // field ham sortga oxshaydi urlga user vergul bilan yozadi lekin biz fieldni ichiga boshjoy tashab kiritishimiz kerak
      const boshJoylikQuery = this.queryUser.field.split(",").join(" ");
      this.model = this.model.select(boshJoylikQuery);
    }
    return this;
  }
  pagination() {
    if (this.queryUser.page) {
      const page = this.queryUser.page || 1;
      const limit = this.queryUser.limit || 5;
      this.model = this.model.skip((page - 1) * limit).limit(limit);
    }
    return this;
  }
}

module.exports = featureApi;
