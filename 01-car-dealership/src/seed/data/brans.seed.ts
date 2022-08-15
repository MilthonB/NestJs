import { Brand } from '../../brands/entities/brand.entity';

import { v4 as uuid } from "uuid";

export const BRANS_SEED: Brand[] = [

    {
        id: uuid(),
        name: 'Toyota',
        createAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Honda',
        createAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Ford',
        createAt: new Date().getTime()
    },
    {
        id: uuid(),
        name: 'Nissan',
        createAt: new Date().getTime()
    },
]