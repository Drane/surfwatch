import {Entity, model, property, hasMany} from '@loopback/repository';
import { Location } from './location.model';
import { Measurement } from './measurement.model';

@model({settings: {}})
export class Buoy extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  placeName: string;

  @property({
    type: 'object',
  })
  location?: Location;

  @property({
    type: 'string',
  })
  description?: string;

  @hasMany(() => Measurement, {keyTo: 'buoyPlaceName'})
  @property.array(Measurement)
  measurements: Measurement[];

  constructor(data?: Partial<Buoy>) {
    super(data);
  }
}

export interface BuoyRelations {
  // describe navigational properties here
}

export type BuoyWithRelations = Buoy & BuoyRelations;
