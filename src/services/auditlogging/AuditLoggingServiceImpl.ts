import { AuditLogEntry, AuditLoggingService } from 'backk';

export default class AuditLoggingServiceImpl extends AuditLoggingService {
  log(auditLogEntry: AuditLogEntry): Promise<void> {
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'integration') {
      return Promise.resolve();
    } else {
      return Promise.resolve();
    }
  }
}
