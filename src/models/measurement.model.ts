import {property, model, Entity, belongsTo} from '@loopback/repository';
import { Buoy } from './buoy.model';

@model()
export class Measurement extends Entity{

  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({type: 'date', required: true})
  dateTime: Date;

  @property({type: 'number', required: true})
  peakFrequency: number;
  
  @belongsTo(() => Buoy)
  buoyPlaceName: string;

  constructor(data?: Partial<Measurement>) {
    super(data);
  }

}

export interface MeasurementRelations {
  // describe navigational properties here
}

export type MeasurementWithRelations = Measurement & MeasurementRelations;