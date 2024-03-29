import { types, flow, applySnapshot } from 'mobx-state-tree';
import beerApi from 'api/beer';
import { ApiErrorsStore } from 'store';
import { TBeerListParams } from 'api/types';
import BeerModel from './Beer';
import { RemoteDataModel } from './RemoteData';

const BeerCollection = types
  .compose(
    RemoteDataModel,
    types.model({
      items: types.array(BeerModel),
    })
  )
  .named('BeerCollection')
  .actions((self) => {
    const loadByParams = flow(function* loadAll(params: TBeerListParams = {}) {
      self.setPending();

      try {
        const { data } = yield beerApi.get(params);
        // что бы хорошо было видно прелоадер, делаем задержку 400 мс
        setTimeout(() => {
          applySnapshot(self.items, data);
          self.setLoadSuccess();
        }, 400);
      } catch (e) {
        self.setError();
        ApiErrorsStore.addError(e);
      }
    });

    return {
      loadByParams,
    };
  });

export default BeerCollection;
