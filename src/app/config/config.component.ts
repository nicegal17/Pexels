config: Config | undefined;

showConfig() {
  this.configService.getConfig()
    .subscribe((data: Config) => this.config = { ...data
        // heroesUrl: data.heroesUrl,
        // textfile:  data.textfile,
        // date: data.date,
    });
}

showConfigResponse() {
  this.configService.getConfigResponse()
    // resp is of type `HttpResponse<Config>`
    .subscribe(resp => {
      // display its headers
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);

      // access the body directly, which is typed as `Config`.
      this.config = { ...resp.body! };
    });
}
