import { PropertyFactory } from './factories/index.js'
import {
    ArrayProperty,
    BoolProperty,
    EnumProperty,
    FloatProperty,
    IntProperty,
    ObjectProperty,
    SoftObjectProperty,
    StrProperty,
    StructProperty,
    Tuple,
    Guid
} from './properties/index.js'

import {
    IntArray,
    SoftObjectArray,
    StructArray
} from './arrays/index.js'

PropertyFactory.add(ArrayProperty);
PropertyFactory.add(BoolProperty);
PropertyFactory.add(EnumProperty);
PropertyFactory.add(FloatProperty);
PropertyFactory.add(IntProperty);
PropertyFactory.add(ObjectProperty);
PropertyFactory.add(SoftObjectProperty);
PropertyFactory.add(StrProperty);
PropertyFactory.add(StructProperty);
PropertyFactory.add(Tuple);
PropertyFactory.add(Guid);
PropertyFactory.add(IntArray);
PropertyFactory.add(SoftObjectArray);
PropertyFactory.Arrays[StructProperty.name] = StructArray;
PropertyFactory.Arrays[IntProperty.name] = IntArray;
PropertyFactory.Arrays[SoftObjectProperty.name] = SoftObjectArray;
// console.log(PropertyFactory.Properties);

export { PropertyFactory }
export { Gvas } from './Gvas.js'
export { GvasHeader } from './GvasHeader.js'
export * from './PropertyErrors.js'
