import { repository, Filter } from "@loopback/repository";
import { BuoyRepository } from "../repositories";
import { param, get } from "@loopback/rest";
import { Buoy, Measurement } from "../models";

export class BuoyMeasurementsController {
    constructor(
        @repository(BuoyRepository)
        protected buoyRepository: BuoyRepository
    ){}

    @get('/buoys/{placeName}/measurements', {
        responses: {
            '200': {
                description: 'Array of Measurement model instances',
                content: {
                    'application/json': {
                        schema: {type: 'array', items: {'x-ts-type': Measurement}},
                    },
                },
            },
        },
      })
    async findMeasurements(
        @param.path.string('placeName') placeName: typeof Buoy.prototype.placeName,
        @param.query.string('filter') filter?: Filter<Measurement>,
        ): Promise<Measurement[]>{
            return await this.buoyRepository.measurements(placeName).find(filter);
    }
}