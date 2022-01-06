import { CaptchaVerificationService } from 'backk';

export default class CaptchaVerificationServiceImpl extends CaptchaVerificationService {
  verifyCaptcha(): Promise<boolean> {
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'integration') {
      return Promise.resolve(true);
    } else {
      return Promise.resolve(true);
    }
  }
}
