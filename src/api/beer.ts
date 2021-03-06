import ApiClient from './ApiClient';
import { TBeerListParams, IBeerDTO } from './types';

const beerApi = {
  get: (params: TBeerListParams = {}) => ApiClient.get<{ data: IBeerDTO[] }>(`/beers`, { params }),
  getById: (id: string) => ApiClient.get<{ data: IBeerDTO }>(`/beers/${id}`),
  /** ids most be type: 1|2|3|4 */
  getByIds: (ids: string) => ApiClient.get<{ data: IBeerDTO }>(`/beers/`, { params: { ids } }),
};

export default beerApi;
