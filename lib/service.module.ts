import { DynamicModule, Module } from '@nestjs/common';

const SERVICE_PROVIDER = 'SERVICE_PROVIDER';

@Module({})
export class ServiceModule {
	static register (options : object = {}) : DynamicModule {
		const serviceProvider = {
			provide : SERVICE_PROVIDER,
			useFactory : async (service : any) : Promise<any> => {
				return service;
			},
			inject : []
		};

		return {
			module : ServiceModule,
			providers : [serviceProvider],
			exports : [serviceProvider]
		};
	}
}
