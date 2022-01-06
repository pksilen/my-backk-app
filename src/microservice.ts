import {
  DefaultStartupCheckServiceImpl,
  JwtAuthorizationServiceImpl,
  Microservice,
  MySqlDataStore,
} from 'backk';
import AuditLoggingServiceImpl from './services/auditlogging/AuditLoggingServiceImpl';
import CaptchaVerificationServiceImpl from './services/captchaverification/CaptchaVerifyServiceImpl';
import ExampleServiceImpl from './services/example/ExampleServiceImpl';
import LivenessCheckServiceImpl from './services/livenesscheck/LivenessCheckServiceImpl';
import ReadinessCheckServiceImpl from './services/readinesscheckservice/ReadinessCheckServiceImpl';
import ResponseCacheConfigServiceImpl from './services/responsecacheconfig/ResponseCacheConfigServiceImpl';

const dataStore = new MySqlDataStore();

// noinspection JSUnusedLocalSymbols
class MicroserviceImpl extends Microservice {
  private readonly auditLoggingService = new AuditLoggingServiceImpl();
  private readonly authorizationService = new JwtAuthorizationServiceImpl();
  private readonly captchaVerificationService = new CaptchaVerificationServiceImpl();
  private readonly livenessCheckService = new LivenessCheckServiceImpl(dataStore);
  private readonly responseCacheConfigService = new ResponseCacheConfigServiceImpl();
  private readonly readinessCheckService = new ReadinessCheckServiceImpl();
  private readonly startupCheckService = new DefaultStartupCheckServiceImpl(dataStore);
  private readonly exampleService = new ExampleServiceImpl(dataStore);

  constructor() {
    super(dataStore);
  }
}

const microservice = new MicroserviceImpl();
export default microservice;
