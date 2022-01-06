import { ResponseCacheConfigService } from 'backk';

export default class ResponseCacheConfigServiceImpl extends ResponseCacheConfigService {
  getCachingDurationInSecs(serviceFunctionName: string, serviceFunctionArgument: any): number {
    return 60;
  }

  shouldCacheServiceFunctionCallResponse(serviceFunctionName: string, serviceFunctionArgument: any): boolean {
    return false;
  }
}
