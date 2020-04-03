import { Injectable, Inject } from "@angular/core";

export class InjectInjectableService {
  constructor() {}
}

class OtherService {
  constructor() {}
}

@Inject
class SimpleService1 {
  otherService: OtherService;

  constructor(@Inject(OtherService) otherService: OtherService) {
    this.otherService = otherService;
  }
}

// This works because @Injectable automatically injects every parameter to the
// constructor as long as that parameter has a type
@Injectable()
class SimpleService2 {
  otherService: OtherService;
  constructor(otherService: OtherService) {
    this.otherService = otherService;
  }
}
