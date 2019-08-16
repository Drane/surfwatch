import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {Buoy, BuoyRelations, Measurement} from '../models';
import {InMemoryDbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import { MeasurementRepository } from './measurement.repository';

export class BuoyRepository extends DefaultCrudRepository<
  Buoy,
  typeof Buoy.prototype.placeName,
  BuoyRelations
> {

  public readonly measurements: HasManyRepositoryFactory<
    Measurement, 
    typeof Buoy.prototype.placeName
  >;

  constructor(
    @inject('datasources.InMemoryDB') dataSource: InMemoryDbDataSource,
    @repository.getter('MeasurementRepository') getMeasurementRepository : Getter<MeasurementRepository>,
  ) {
    super(Buoy, dataSource);
    this.measurements = this.createHasManyRepositoryFactoryFor('measurements', getMeasurementRepository);
  }
}