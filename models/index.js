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
    Guid,
    IntArray,
    SoftObjectArray
} from './properties/index.js'

PropertyFactory.add(ArrayProperty.name, ArrayProperty.from);
PropertyFactory.add(BoolProperty.name, BoolProperty.from);
PropertyFactory.add(EnumProperty.name, EnumProperty.from);
PropertyFactory.add(FloatProperty.name, FloatProperty.from);
PropertyFactory.add(IntProperty.name, IntProperty.from);
PropertyFactory.add(ObjectProperty.name, ObjectProperty.from);
PropertyFactory.add(SoftObjectProperty.name, SoftObjectProperty.from);
PropertyFactory.add(StrProperty.name, StrProperty.from);
PropertyFactory.add(StructProperty.name, StructProperty.from);
PropertyFactory.add(Tuple.name, Tuple.from);
PropertyFactory.add(Guid.name, Guid.from);
PropertyFactory.add(IntArray.name, IntArray.from);
PropertyFactory.add(SoftObjectArray.name, SoftObjectArray.from);
// console.log(PropertyFactory.Properties);

export { PropertyFactory }
export { Gvas } from './Gvas.js'
export { GvasHeader } from './GvasHeader.js'
export * from './PropertyErrors.js'
