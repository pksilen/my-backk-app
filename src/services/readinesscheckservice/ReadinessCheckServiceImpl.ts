import { AllowForEveryUser, PromiseErrorOr, ReadinessCheckService } from 'backk';

export default class ReadinessCheckServiceImpl extends ReadinessCheckService {
  constructor() {
    super({});
  }

  @AllowForEveryUser(false)
  isMicroserviceReady(): PromiseErrorOr<null> {
    return Promise.resolve([null, null]);
  }
}
