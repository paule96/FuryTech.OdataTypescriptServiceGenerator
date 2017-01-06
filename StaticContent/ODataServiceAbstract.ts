import { ODataQuery } from './ODataQuery';
import {ODataGetOperation} from './ODataGetOperation';

export abstract class ODataServiceAbstract<T> {

    protected abstract entitySetUrl: string;

    public async abstract Post(entity: T): Promise<T>;

    public async abstract Patch(id: any, entity: T): Promise<T>;

    public async abstract Put(id: any, entity: T): Promise<T>;

    public async abstract Delete(id: any): Promise<any>;

    public abstract Get(id: any): ODataGetOperation<T>;

    public abstract Query(): ODataQuery<T>;
}