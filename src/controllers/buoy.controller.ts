import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Buoy} from '../models';
import {BuoyRepository} from '../repositories';

export class BuoyController {
  constructor(
    @repository(BuoyRepository)
    public buoyRepository: BuoyRepository,
  ) {}

  @post('/buoys', {
    responses: {
      '200': {
        description: 'Buoy model instance',
        content: {'application/json': {schema: {'x-ts-type': Buoy}}},
      },
    },
  })
  async create(@requestBody() buoy: Buoy): Promise<Buoy> {
    return await this.buoyRepository.create(buoy);
  }

  @get('/buoys/count', {
    responses: {
      '200': {
        description: 'Buoy model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Buoy)) where?: Where<Buoy>,
  ): Promise<Count> {
    return await this.buoyRepository.count(where);
  }

  @get('/buoys', {
    responses: {
      '200': {
        description: 'Array of Buoy model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Buoy}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Buoy))
    filter?: Filter<Buoy>,
  ): Promise<Buoy[]> {
    return await this.buoyRepository.find(filter);
  }

  @patch('/buoys', {
    responses: {
      '200': {
        description: 'Buoy PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() buoy: Buoy,
    @param.query.object('where', getWhereSchemaFor(Buoy)) where?: Where<Buoy>,
  ): Promise<Count> {
    return await this.buoyRepository.updateAll(buoy, where);
  }

  @get('/buoys/{id}', {
    responses: {
      '200': {
        description: 'Buoy model instance',
        content: {'application/json': {schema: {'x-ts-type': Buoy}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Buoy> {
    return await this.buoyRepository.findById(id);
  }

  @patch('/buoys/{id}', {
    responses: {
      '204': {
        description: 'Buoy PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() buoy: Buoy,
  ): Promise<void> {
    await this.buoyRepository.updateById(id, buoy);
  }

  @put('/buoys/{id}', {
    responses: {
      '204': {
        description: 'Buoy PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() buoy: Buoy,
  ): Promise<void> {
    await this.buoyRepository.replaceById(id, buoy);
  }

  @del('/buoys/{id}', {
    responses: {
      '204': {
        description: 'Buoy DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.buoyRepository.deleteById(id);
  }
}
