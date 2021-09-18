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

PropertyFactory.Properties['ArrayProperty'] = ArrayProperty;
PropertyFactory.Properties['BoolProperty'] = BoolProperty;
PropertyFactory.Properties['EnumProperty'] = EnumProperty;
PropertyFactory.Properties['FloatProperty'] = FloatProperty;
PropertyFactory.Properties['IntProperty'] = IntProperty;
PropertyFactory.Properties['ObjectProperty'] = ObjectProperty;
PropertyFactory.Properties['SoftObjectProperty'] = SoftObjectProperty;
PropertyFactory.Properties['StrProperty'] = StrProperty;
PropertyFactory.Properties['StructProperty'] = StructProperty;
PropertyFactory.Properties['Tuple'] = Tuple;
PropertyFactory.Properties['Guid'] = Guid;
PropertyFactory.Arrays['IntArray'] = IntArray;
PropertyFactory.Arrays['SoftObjectArray'] = SoftObjectArray;
PropertyFactory.Arrays['StructProperty'] = StructArray;
PropertyFactory.Arrays['IntProperty'] = IntArray;
PropertyFactory.Arrays['SoftObjectProperty'] = SoftObjectArray;

export { PropertyFactory }
export { Gvas } from './Gvas.js'
export { GvasHeader } from './GvasHeader.js'
export * from './PropertyErrors.js'
export * from './properties/index.js'
export * from './arrays/index.js'
