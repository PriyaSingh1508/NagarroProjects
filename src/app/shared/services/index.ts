import { DCPHttpService } from './custom-http/dcp-http.service';


export const SHARED_PROVIDERS: any[] = [DCPHttpService];

export * from './custom-http/dcp-http.service';
export * from './blob-storage.service';
