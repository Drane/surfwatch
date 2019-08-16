import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './in-memory-db.datasource.json';

export class InMemoryDbDataSource extends juggler.DataSource {
  static dataSourceName = 'InMemoryDB';

  constructor(
    @inject('datasources.config.InMemoryDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
