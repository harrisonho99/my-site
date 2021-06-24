interface RouterSubject {
  route: string;
  title: string;
}
class Router implements RouterSubject {
  public route: string;
  public title: string;
  constructor(route: string, title: string) {
    this.route = route;
    this.title = title;
  }
}

export type { RouterSubject };
export { Router };
