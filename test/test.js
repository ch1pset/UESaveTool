import { StructProperty, StructArray } from '../models/properties/index.js'
import * as fs from 'fs';

let obj2 = {
    "Name": "RunPropertyStore\u0000",
    "Type": "StructProperty\u0000",
    "Property": [
        {
            "Name": "FloorIndex\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                0,
                3
            ]
        },
        {
            "Name": "Score\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                0,
                405655
            ]
        },
        {
            "Name": "RunKills\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                0,
                162
            ]
        },
        {
            "Name": "RunNoteStreak\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                0,
                92
            ]
        },
        {
            "Name": "RunBestNoteStreak\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                0,
                180
            ]
        },
        {
            "Name": "RunTimeElapsed\u0000",
            "Type": "FloatProperty\u0000",
            "Property": [
                0,
                517.7653198242188
            ]
        },
        {
            "Name": "ShopItemPool\u0000",
            "Type": "ArrayProperty\u0000",
            "Property": {
                "Name": "ShopItemPool\u0000",
                "Type": "StructProperty\u0000",
                "Property": [
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemCriticalChance.Chest_ItemCriticalChance_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemFullRoman.Head_ItemFullRoman_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemBonusSpeedAfterFire.Boots_ItemBonusSpeedAfterFire_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_HighAltitudeGloves.Arm_HighAltitudeGloves_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemCooldownReduction.Chest_ItemCooldownReduction_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemLuckUp.BP_ItemLuckUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemInfiniteAmmo.Chest_ItemInfiniteAmmo_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_RevealMap.Arm_RevealMap_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemRangeDouble.Chest_ItemRangeDouble_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemHeadSpeed.Head_ItemHeadSpeed_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemAttatchExplosives.Head_ItemAttatchExplosives_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_ItemSpeedUpArm.Arm_ItemSpeedUpArm_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemSwapAbilities.Head_ItemSwapAbilities_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemLightningCleave.Chest_ItemLightningCleave_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemTallShield.Chest_ItemTallShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemFluffy.Head_ItemFluffy_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemConvertShieldsToHealth.BP_ItemConvertShieldsToHealth_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemRegeneratingBreastPlate.Chest_ItemRegeneratingBreastPlate_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.699999988079071
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_ItemPenetratingShots.Arm_ItemPenetratingShots_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemJumpBoots.Boots_ItemJumpBoots_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_ItemDoubleHealingEffects.Arm_ItemDoubleHealingEffects_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemStrafeBoots.Boots_ItemStrafeBoots_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ClipUp.BP_ClipUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemHopliteGreaves.Boots_ItemHopliteGreaves_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_ItemMedallion.Arm_ItemMedallion_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemLuckyDice.BP_ItemLuckyDice_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemOpeningChord.Head_ItemOpeningChord_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemReflectDamage.Head_ItemReflectDamage_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_ItemMultiCleavingAttacks.Arm_ItemMultiCleavingAttacks_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_ItemSlowEnemies.Arm_ItemSlowEnemies_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemMindFlay.Head_ItemMindFlay_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemRevive.Chest_ItemRevive_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemArmourBreastplate.Chest_ItemArmourBreastplate_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_ItemGunFiresTwice.Arm_ItemGunFiresTwice_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemRangeUp.BP_ItemRangeUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemCriticalUp.BP_ItemCriticalUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemCriticalsAddDOT.Boots_ItemCriticalsAddDOT_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_Quickloader.Arm_Quickloader_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemDamageUp.BP_ItemDamageUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemTramplingBoots.Boots_ItemTramplingBoots_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemEchoShot.Head_ItemEchoShot_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemSpeedUp.BP_ItemSpeedUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemExtraFirebolts.Chest_ItemExtraFirebolts_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_ItemConsumeSlotToGetStatBoost.Arm_ItemConsumeSlotToGetStatBoost_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemCriticalMultiplier.Head_ItemCriticalMultiplier_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_SkeletonKey.BP_SkeletonKey_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemSpeedBoots.Boots_ItemSpeedBoots_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemExplodingShots.Head_ItemExplodingShots_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemCreepBoots.Boots_ItemCreepBoots_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_ItemEnemiesRainGold.Arm_ItemEnemiesRainGold_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemDeadeye.Head_ItemDeadeye_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemRandomDamageOnBeat.Boots_ItemRandomDamageOnBeat_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.20000000298023224
                                ]
                            }
                        ]
                    }
                ],
                "StoredPropertyType": "BPMAbilityWeightPair\u0000"
            },
            "StoredPropertyType": "StructProperty\u0000"
        },
        {
            "Name": "TreasureItemPool\u0000",
            "Type": "ArrayProperty\u0000",
            "Property": {
                "Name": "TreasureItemPool\u0000",
                "Type": "StructProperty\u0000",
                "Property": [
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemHopliteGreaves.Boots_ItemHopliteGreaves_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemFullRoman.Head_ItemFullRoman_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemBonusSpeedAfterFire.Boots_ItemBonusSpeedAfterFire_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemReflectDamage.Head_ItemReflectDamage_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_ItemConsumeSlotToGetStatBoost.Arm_ItemConsumeSlotToGetStatBoost_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ClipUp.BP_ClipUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemCreepBoots.Boots_ItemCreepBoots_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemTramplingBoots.Boots_ItemTramplingBoots_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemHeadSpeed.Head_ItemHeadSpeed_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemLuckUp.BP_ItemLuckUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemExplodingShots.Head_ItemExplodingShots_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.800000011920929
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_RevealMap.Arm_RevealMap_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemLuckyDice.BP_ItemLuckyDice_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemCriticalChance.Chest_ItemCriticalChance_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemOpeningChord.Head_ItemOpeningChord_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemInfiniteAmmo.Chest_ItemInfiniteAmmo_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.20000000298023224
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_SkeletonKey.BP_SkeletonKey_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemRangeUp.BP_ItemRangeUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_ItemSlowEnemies.Arm_ItemSlowEnemies_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_ItemDoubleHealingEffects.Arm_ItemDoubleHealingEffects_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemCriticalsAddDOT.Boots_ItemCriticalsAddDOT_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_DwemerRing.Arm_DwemerRing_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1.2000000476837158
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemLightningCleave.Chest_ItemLightningCleave_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemClogsWooden.Boots_ItemClogsWooden_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_Quickloader.Arm_Quickloader_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.5
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_ItemPenetratingShots.Arm_ItemPenetratingShots_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemMindFlay.Head_ItemMindFlay_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemSlowProjectileShield.Chest_ItemSlowProjectileShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.20000000298023224
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemArmourBreastplate.Chest_ItemArmourBreastplate_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_ItemSpeedUpArm.Arm_ItemSpeedUpArm_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemHeartContainer.BP_ItemHeartContainer_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemBlankShield.Chest_ItemBlankShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.20000000298023224
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemConvertShieldsToHealth.BP_ItemConvertShieldsToHealth_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemSpeedUp.BP_ItemSpeedUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_ItemGunFiresTwice.Arm_ItemGunFiresTwice_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemAttatchExplosives.Head_ItemAttatchExplosives_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.800000011920929
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemRegeneratingBreastPlate.Chest_ItemRegeneratingBreastPlate_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.6000000238418579
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemDamageUp.BP_ItemDamageUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_ItemEnemiesRainGold.Arm_ItemEnemiesRainGold_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemExtraFirebolts.Chest_ItemExtraFirebolts_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemEchoShot.Head_ItemEchoShot_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemJumpBoots.Boots_ItemJumpBoots_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_ItemMedallion.Arm_ItemMedallion_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemTallShield.Chest_ItemTallShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.20000000298023224
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemSpeedBoots.Boots_ItemSpeedBoots_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemFullHorns.Head_ItemFullHorns_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.4000000059604645
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemSwapAbilities.Head_ItemSwapAbilities_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_EagleEye.Arm_EagleEye_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.20000000298023224
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemCriticalMultiplier.Head_ItemCriticalMultiplier_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_HighAltitudeGloves.Arm_HighAltitudeGloves_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_ItemMultiCleavingAttacks.Arm_ItemMultiCleavingAttacks_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemStrafeBoots.Boots_ItemStrafeBoots_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemDeadeye.Head_ItemDeadeye_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemMagicFortify.Chest_ItemMagicFortify_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.20000000298023224
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemRevive.Chest_ItemRevive_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemCriticalUp.BP_ItemCriticalUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemEnchantedGreaves.Boots_ItemEnchantedGreaves_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.20000000298023224
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemCooldownReduction.Chest_ItemCooldownReduction_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemFluffy.Head_ItemFluffy_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.4000000059604645
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemCursedIron.Chest_ItemCursedIron_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.20000000298023224
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_GoldenGreaves.Boots_GoldenGreaves_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemOrc.Head_ItemOrc_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.20000000298023224
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemJumpStrength.Chest_ItemJumpStrength_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.20000000298023224
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemRangeDouble.Chest_ItemRangeDouble_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.20000000298023224
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemRandomDamageOnBeat.Boots_ItemRandomDamageOnBeat_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.15000000596046448
                                ]
                            }
                        ]
                    }
                ],
                "StoredPropertyType": "BPMAbilityWeightPair\u0000"
            },
            "StoredPropertyType": "StructProperty\u0000"
        },
        {
            "Name": "BossItemPool\u0000",
            "Type": "ArrayProperty\u0000",
            "Property": {
                "Name": "BossItemPool\u0000",
                "Type": "StructProperty\u0000",
                "Property": [
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemSpeedUp.BP_ItemSpeedUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemDamageUp.BP_ItemDamageUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemRangeUp.BP_ItemRangeUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ClipUp.BP_ClipUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ClipUp.BP_ClipUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemDamageUp.BP_ItemDamageUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemSpeedUp.BP_ItemSpeedUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    }
                ],
                "StoredPropertyType": "BPMAbilityWeightPair\u0000"
            },
            "StoredPropertyType": "StructProperty\u0000"
        },
        {
            "Name": "WeaponPool\u0000",
            "Type": "ArrayProperty\u0000",
            "Property": {
                "Name": "WeaponPool\u0000",
                "Type": "StructProperty\u0000",
                "Property": [
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_BigGun.BP_BigGun_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.5
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_DoubleBarrel.BP_DoubleBarrel_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_Blaster.BP_Blaster_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_RailGun.BP_RailGun_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.5
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_StickyGun.BP_StickyGun_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_MiniGun.BP_MiniGun_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_SubmachineGun.BP_SubmachineGun_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_GrenadeLauncher.BP_GrenadeLauncher_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_AutoShotty.BP_AutoShotty_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_PingRifle.BP_PingRifle_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_AlienBlaster.BP_AlienBlaster_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.5
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_GoldPistol.BP_GoldPistol_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.05000000074505806
                                ]
                            }
                        ]
                    }
                ],
                "StoredPropertyType": "BPMWeaponWeightPair\u0000"
            },
            "StoredPropertyType": "StructProperty\u0000"
        },
        {
            "Name": "WeaponCheapPool\u0000",
            "Type": "ArrayProperty\u0000",
            "Property": {
                "Name": "WeaponCheapPool\u0000",
                "Type": "StructProperty\u0000",
                "Property": [
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_SubmachineGun.BP_SubmachineGun_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.20000000298023224
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_PingRifle.BP_PingRifle_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.0020000000949949026
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_DoubleBarrel.BP_DoubleBarrel_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.0010000000474974513
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_GrenadeLauncher.BP_GrenadeLauncher_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.0010000000474974513
                                ]
                            }
                        ]
                    }
                ],
                "StoredPropertyType": "BPMWeaponWeightPair\u0000"
            },
            "StoredPropertyType": "StructProperty\u0000"
        },
        {
            "Name": "WeaponAffordablePool\u0000",
            "Type": "ArrayProperty\u0000",
            "Property": {
                "Name": "WeaponAffordablePool\u0000",
                "Type": "StructProperty\u0000",
                "Property": [
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_DoubleBarrel.BP_DoubleBarrel_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_MiniGun.BP_MiniGun_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_PingRifle.BP_PingRifle_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_SubmachineGun.BP_SubmachineGun_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_GrenadeLauncher.BP_GrenadeLauncher_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_AutoShotty.BP_AutoShotty_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_StickyGun.BP_StickyGun_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.800000011920929
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_RailGun.BP_RailGun_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.4000000059604645
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_Blaster.BP_Blaster_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.20000000298023224
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_GoldPistol.BP_GoldPistol_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.029999999329447746
                                ]
                            }
                        ]
                    }
                ],
                "StoredPropertyType": "BPMWeaponWeightPair\u0000"
            },
            "StoredPropertyType": "StructProperty\u0000"
        },
        {
            "Name": "WeaponExpensivePool\u0000",
            "Type": "ArrayProperty\u0000",
            "Property": {
                "Name": "WeaponExpensivePool\u0000",
                "Type": "StructProperty\u0000",
                "Property": [
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_Blaster.BP_Blaster_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_StickyGun.BP_StickyGun_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_PingRifle.BP_PingRifle_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_AlienBlaster.BP_AlienBlaster_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.5
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_GrenadeLauncher.BP_GrenadeLauncher_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_DoubleBarrel.BP_DoubleBarrel_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_MiniGun.BP_MiniGun_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_AutoShotty.BP_AutoShotty_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_SubmachineGun.BP_SubmachineGun_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_BigGun.BP_BigGun_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.5
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_RailGun.BP_RailGun_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.5
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMWeapon\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Weapons/BP_GoldPistol.BP_GoldPistol_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.05000000074505806
                                ]
                            }
                        ]
                    }
                ],
                "StoredPropertyType": "BPMWeaponWeightPair\u0000"
            },
            "StoredPropertyType": "StructProperty\u0000"
        },
        {
            "Name": "LibrarySecondaryPool\u0000",
            "Type": "ArrayProperty\u0000",
            "Property": {
                "Name": "LibrarySecondaryPool\u0000",
                "Type": "StructProperty\u0000",
                "Property": [
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_AbilityBlockArm.Secondary_AbilityBlockArm_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_ClapExplosion.Secondary_ClapExplosion_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_Unrelenting.Secondary_Unrelenting_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_Flak.Secondary_Flak_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_CursedDamageAll.Secondary_CursedDamageAll_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_CoinThrow.Secondary_CoinThrow_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_MarkForDeath.Secondary_MarkForDeath_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_Snipe.Secondary_Snipe_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_BurstAttack.Secondary_BurstAttack_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_ManaShield.Secondary_ManaShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_AbilityFreeze.Secondary_AbilityFreeze_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_Teleport.Secondary_Teleport_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_VampAttack.Secondary_VampAttack_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    }
                ],
                "StoredPropertyType": "BPMAbilityWeightPair\u0000"
            },
            "StoredPropertyType": "StructProperty\u0000"
        },
        {
            "Name": "LibraryUltimatePool\u0000",
            "Type": "ArrayProperty\u0000",
            "Property": {
                "Name": "LibraryUltimatePool\u0000",
                "Type": "StructProperty\u0000",
                "Property": [
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_AbilityUltimateAlliedAngel.Ulti_AbilityUltimateAlliedAngel_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_AbilityUltimateSpeedBuff.Ulti_AbilityUltimateSpeedBuff_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_AbilityUltimateLuckForHealth.Ulti_AbilityUltimateLuckForHealth_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_ConvertToCoins.Ulti_ConvertToCoins_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_AbilityUltimateMegaShot.Ulti_AbilityUltimateMegaShot_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_AbilityUltimateGenerateCoins.Ulti_AbilityUltimateGenerateCoins_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_RemoteBank.Ulti_RemoteBank_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_AbilityUltimateHeal.Ulti_AbilityUltimateHeal_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_AbilityUltimateDiscount.Ulti_AbilityUltimateDiscount_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_AbilityUltimateTheQuest.Ulti_AbilityUltimateTheQuest_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_AbilityUltimateBigSnap.Ulti_AbilityUltimateBigSnap_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_GenerateChest.Ulti_GenerateChest_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_AbilityUltimateRegenForTime.Ulti_AbilityUltimateRegenForTime_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    }
                ],
                "StoredPropertyType": "BPMAbilityWeightPair\u0000"
            },
            "StoredPropertyType": "StructProperty\u0000"
        },
        {
            "Name": "ChoiceRoomItemsPoolHead\u0000",
            "Type": "ArrayProperty\u0000",
            "Property": {
                "Name": "ChoiceRoomItemsPoolHead\u0000",
                "Type": "StructProperty\u0000",
                "Property": [
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemFullRoman.Head_ItemFullRoman_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemDeadeye.Head_ItemDeadeye_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemEchoShot.Head_ItemEchoShot_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.000009999999747378752
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.000009999999747378752
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.000009999999747378752
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.000009999999747378752
                                ]
                            }
                        ]
                    }
                ],
                "StoredPropertyType": "BPMAbilityWeightPair\u0000"
            },
            "StoredPropertyType": "StructProperty\u0000"
        },
        {
            "Name": "ChoiceRoomItemsPoolFoot\u0000",
            "Type": "ArrayProperty\u0000",
            "Property": {
                "Name": "ChoiceRoomItemsPoolFoot\u0000",
                "Type": "StructProperty\u0000",
                "Property": [
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemTramplingBoots.Boots_ItemTramplingBoots_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemHopliteGreaves.Boots_ItemHopliteGreaves_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemRandomDamageOnBeat.Boots_ItemRandomDamageOnBeat_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.00009999999747378752
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.00009999999747378752
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.000009999999747378752
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.000009999999747378752
                                ]
                            }
                        ]
                    }
                ],
                "StoredPropertyType": "BPMAbilityWeightPair\u0000"
            },
            "StoredPropertyType": "StructProperty\u0000"
        },
        {
            "Name": "ChoiceRoomItemsPoolShield\u0000",
            "Type": "ArrayProperty\u0000",
            "Property": {
                "Name": "ChoiceRoomItemsPoolShield\u0000",
                "Type": "StructProperty\u0000",
                "Property": [
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemExtraFirebolts.Chest_ItemExtraFirebolts_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemInfiniteAmmo.Chest_ItemInfiniteAmmo_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.000009999999747378752
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.000009999999747378752
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.000009999999747378752
                                ]
                            }
                        ]
                    }
                ],
                "StoredPropertyType": "BPMAbilityWeightPair\u0000"
            },
            "StoredPropertyType": "StructProperty\u0000"
        },
        {
            "Name": "ChoiceRoomItemsPoolArm\u0000",
            "Type": "ArrayProperty\u0000",
            "Property": {
                "Name": "ChoiceRoomItemsPoolArm\u0000",
                "Type": "StructProperty\u0000",
                "Property": [
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_EagleEye.Arm_EagleEye_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_HighAltitudeGloves.Arm_HighAltitudeGloves_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.000009999999747378752
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.000009999999747378752
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.000009999999747378752
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.000009999999747378752
                                ]
                            }
                        ]
                    }
                ],
                "StoredPropertyType": "BPMAbilityWeightPair\u0000"
            },
            "StoredPropertyType": "StructProperty\u0000"
        },
        {
            "Name": "DevilStatuePool\u0000",
            "Type": "ArrayProperty\u0000",
            "Property": {
                "Name": "DevilStatuePool\u0000",
                "Type": "StructProperty\u0000",
                "Property": [
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemRandomDamageOnBeat.Boots_ItemRandomDamageOnBeat_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    2
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_RevealMap.Arm_RevealMap_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemCriticalMultiplier.Head_ItemCriticalMultiplier_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    2
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_CursedDamageAll.Secondary_CursedDamageAll_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    2
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemInfiniteAmmo.Chest_ItemInfiniteAmmo_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    2
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_CoinThrow.Secondary_CoinThrow_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemLightningCleave.Chest_ItemLightningCleave_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_CoinThrow.Secondary_CoinThrow_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_SkeletonKey.BP_SkeletonKey_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    2
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_AbilityUltimateBigSnap.Ulti_AbilityUltimateBigSnap_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemLuckyDice.BP_ItemLuckyDice_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    2
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_MarkForDeath.Secondary_MarkForDeath_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ClipUp.BP_ClipUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.4000000059604645
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemRangeUp.BP_ItemRangeUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.4000000059604645
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.4000000059604645
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemSpeedUp.BP_ItemSpeedUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.4000000059604645
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemDamageUp.BP_ItemDamageUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.4000000059604645
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemSpeedUp.BP_ItemSpeedUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.4000000059604645
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.4000000059604645
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemRangeUp.BP_ItemRangeUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.4000000059604645
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ClipUp.BP_ClipUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.4000000059604645
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemDamageUp.BP_ItemDamageUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.4000000059604645
                                ]
                            }
                        ]
                    }
                ],
                "StoredPropertyType": "BPMAbilityWeightPair\u0000"
            },
            "StoredPropertyType": "StructProperty\u0000"
        },
        {
            "Name": "AngelStatuePool\u0000",
            "Type": "ArrayProperty\u0000",
            "Property": {
                "Name": "AngelStatuePool\u0000",
                "Type": "StructProperty\u0000",
                "Property": [
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_ConvertToCoins.Ulti_ConvertToCoins_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.20000000298023224
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemClogsWooden.Boots_ItemClogsWooden_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_ItemMedallion.Arm_ItemMedallion_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemDamageUp.BP_ItemDamageUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemFullRoman.Head_ItemFullRoman_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemCooldownReduction.Chest_ItemCooldownReduction_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.5
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemJumpStrength.Chest_ItemJumpStrength_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_AbilityUltimateAlliedAngel.Ulti_AbilityUltimateAlliedAngel_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.5
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemRangeUp.BP_ItemRangeUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_Snipe.Secondary_Snipe_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.5
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemExtraFirebolts.Chest_ItemExtraFirebolts_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.5
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemDamageUp.BP_ItemDamageUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemReflectDamage.Head_ItemReflectDamage_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemSpeedUp.BP_ItemSpeedUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ClipUp.BP_ClipUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemSpeedUp.BP_ItemSpeedUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemEchoShot.Head_ItemEchoShot_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemEnchantedGreaves.Boots_ItemEnchantedGreaves_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemRevive.Chest_ItemRevive_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemRangeUp.BP_ItemRangeUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemHeartContainer.BP_ItemHeartContainer_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_Flak.Secondary_Flak_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ClipUp.BP_ClipUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemKey.BP_ItemKey_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemRegeneratingBreastPlate.Chest_ItemRegeneratingBreastPlate_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_GenerateChest.Ulti_GenerateChest_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.5
                                ]
                            }
                        ]
                    }
                ],
                "StoredPropertyType": "BPMAbilityWeightPair\u0000"
            },
            "StoredPropertyType": "StructProperty\u0000"
        },
        {
            "Name": "CursedChestPool\u0000",
            "Type": "ArrayProperty\u0000",
            "Property": {
                "Name": "CursedChestPool\u0000",
                "Type": "StructProperty\u0000",
                "Property": [
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemShield.BP_ItemShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemShield.BP_ItemShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemHeartContainer.BP_ItemHeartContainer_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemRandomDamageOnBeat.Boots_ItemRandomDamageOnBeat_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemRangeUp.BP_ItemRangeUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ClipUp.BP_ClipUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_CoinThrow.Secondary_CoinThrow_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemShield.BP_ItemShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemCriticalMultiplier.Head_ItemCriticalMultiplier_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemCursedIron.Chest_ItemCursedIron_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_AbilityUltimateLuckForHealth.Ulti_AbilityUltimateLuckForHealth_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemTramplingBoots.Boots_ItemTramplingBoots_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_MarkForDeath.Secondary_MarkForDeath_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_CursedDamageAll.Secondary_CursedDamageAll_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemHeartContainer.BP_ItemHeartContainer_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.30000001192092896
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemShield.BP_ItemShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemShield.BP_ItemShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemBagOfCoins.BP_ItemBagOfCoins_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.30000001192092896
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemHeart.BP_ItemHeart_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemShield.BP_ItemShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemRangeDouble.Chest_ItemRangeDouble_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemShield.BP_ItemShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemShield.BP_ItemShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemShield.BP_ItemShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemShield.BP_ItemShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemShield.BP_ItemShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemShield.BP_ItemShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemHeartContainer.BP_ItemHeartContainer_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.05000000074505806
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemHeart.BP_ItemHeart_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemShield.BP_ItemShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemHeartContainer.BP_ItemHeartContainer_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.05000000074505806
                                ]
                            }
                        ]
                    }
                ],
                "StoredPropertyType": "BPMAbilityWeightPair\u0000"
            },
            "StoredPropertyType": "StructProperty\u0000"
        },
        {
            "Name": "FutureProofingAPool\u0000",
            "Type": "ArrayProperty\u0000",
            "Property": {
                "Name": "FutureProofingAPool\u0000",
                "Type": "StructProperty\u0000",
                "Property": [
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_AbilityUltimateTheQuest.Ulti_AbilityUltimateTheQuest_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemEnchantedGreaves.Boots_ItemEnchantedGreaves_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Arm/Arm_EagleEye.Arm_EagleEye_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemMagicFortify.Chest_ItemMagicFortify_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemCooldownReduction.Chest_ItemCooldownReduction_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_ManaShield.Secondary_ManaShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemLuckyDice.BP_ItemLuckyDice_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemBlankShield.Chest_ItemBlankShield_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemCursedIron.Chest_ItemCursedIron_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_AbilityUltimateRegenForTime.Ulti_AbilityUltimateRegenForTime_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemArmourBreastplate.Chest_ItemArmourBreastplate_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemInfiniteAmmo.Chest_ItemInfiniteAmmo_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemMoon.Head_ItemMoon_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_ClapExplosion.Secondary_ClapExplosion_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.5
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Secondary/Secondary_Teleport.Secondary_Teleport_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.5
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Chest/Chest_ItemRegeneratingBreastPlate.Chest_ItemRegeneratingBreastPlate_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemDeadeye.Head_ItemDeadeye_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_SkeletonKey.BP_SkeletonKey_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Head/Head_ItemOrc.Head_ItemOrc_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Ultimate/Active/Ulti_AbilityUltimateBigSnap.Ulti_AbilityUltimateBigSnap_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ClipUp.BP_ClipUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.05000000074505806
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Foot/Boots_ItemJumpBoots.Boots_ItemJumpBoots_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.5
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ClipUp.BP_ClipUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.009999999776482582
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemDamageUp.BP_ItemDamageUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemSpeedUp.BP_ItemSpeedUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.05000000074505806
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemRangeUp.BP_ItemRangeUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.10000000149011612
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.05000000074505806
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemAbilityPowerUp.BP_ItemAbilityPowerUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.0010000000474974513
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemSpeedUp.BP_ItemSpeedUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.0010000000474974513
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemRangeUp.BP_ItemRangeUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.0010000000474974513
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Item/Upgrades/BP_ItemDamageUp.BP_ItemDamageUp_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    0.0010000000474974513
                                ]
                            }
                        ]
                    }
                ],
                "StoredPropertyType": "BPMAbilityWeightPair\u0000"
            },
            "StoredPropertyType": "StructProperty\u0000"
        },
        {
            "Name": "FutureProofingBPool\u0000",
            "Type": "ArrayProperty\u0000",
            "Property": {
                "Name": "FutureProofingBPool\u0000",
                "Type": "StructProperty\u0000",
                "Property": [
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Curse/Curse_LowerAmmo.Curse_LowerAmmo_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Curse/Curse_Gambit.Curse_Gambit_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Curse/Curse_BossTough.Curse_BossTough_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Curse/Curse_FastProjectiles.Curse_FastProjectiles_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Curse/Curse_Dying.Curse_Dying_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    },
                    {
                        "Properties": [
                            {
                                "Name": "BPMAbility\u0000",
                                "Type": "SoftObjectProperty\u0000",
                                "Property": "/Game/Blueprints/Abilities/Curse/Curse_Damocles.Curse_Damocles_C\u0000"
                            },
                            {
                                "Name": "Weight\u0000",
                                "Type": "FloatProperty\u0000",
                                "Property": [
                                    0,
                                    1
                                ]
                            }
                        ]
                    }
                ],
                "StoredPropertyType": "BPMAbilityWeightPair\u0000"
            },
            "StoredPropertyType": "StructProperty\u0000"
        },
        {
            "Name": "KeysSpawned\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                0,
                8
            ]
        },
        {
            "Name": "CoinsSpawned\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                0,
                50
            ]
        },
        {
            "Name": "NothingsSpawned\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                0,
                98
            ]
        },
        {
            "Name": "BPMDifficulty\u0000",
            "Type": "EnumProperty\u0000",
            "Property": "EBPMDifficulty::BPMD_EASY\u0000",
            "EnumType": "EBPMDifficulty\u0000"
        },
        {
            "Name": "LibraryBeforeArmoury\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                2,
                1
            ]
        },
        {
            "Name": "LibraryBeforeArmoury\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                3,
                1
            ]
        },
        {
            "Name": "MinibossChoice\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                1,
                1
            ]
        },
        {
            "Name": "MinibossChoice\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                3,
                1
            ]
        },
        {
            "Name": "MinibossChoice\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                4,
                1
            ]
        },
        {
            "Name": "MinibossChoice\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                6,
                1
            ]
        },
        {
            "Name": "MinibossChoice\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                9,
                1
            ]
        },
        {
            "Name": "BankRoomChosen\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                6,
                1
            ]
        },
        {
            "Name": "ChallengeRoomChosen\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                1,
                1
            ]
        },
        {
            "Name": "ChallengeRoomChosen\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                4,
                1
            ]
        },
        {
            "Name": "FloorGenerationSeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                0,
                15331
            ]
        },
        {
            "Name": "FloorGenerationSeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                1,
                23698
            ]
        },
        {
            "Name": "FloorGenerationSeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                2,
                16439
            ]
        },
        {
            "Name": "FloorGenerationSeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                3,
                20512
            ]
        },
        {
            "Name": "FloorGenerationSeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                4,
                3081
            ]
        },
        {
            "Name": "FloorGenerationSeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                5,
                209
            ]
        },
        {
            "Name": "FloorGenerationSeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                6,
                9885
            ]
        },
        {
            "Name": "FloorGenerationSeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                7,
                28603
            ]
        },
        {
            "Name": "FloorGenerationSeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                8,
                20494
            ]
        },
        {
            "Name": "FloorGenerationSeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                9,
                31358
            ]
        },
        {
            "Name": "FloorModifierFloats\u0000",
            "Type": "FloatProperty\u0000",
            "Property": [
                0,
                31.83046531677246
            ]
        },
        {
            "Name": "FloorModifierFloats\u0000",
            "Type": "FloatProperty\u0000",
            "Property": [
                1,
                47.54448318481445
            ]
        },
        {
            "Name": "FloorModifierFloats\u0000",
            "Type": "FloatProperty\u0000",
            "Property": [
                2,
                48.20015335083008
            ]
        },
        {
            "Name": "FloorModifierFloats\u0000",
            "Type": "FloatProperty\u0000",
            "Property": [
                3,
                87.82453918457031
            ]
        },
        {
            "Name": "FloorModifierFloats\u0000",
            "Type": "FloatProperty\u0000",
            "Property": [
                4,
                68.3194580078125
            ]
        },
        {
            "Name": "FloorModifierFloats\u0000",
            "Type": "FloatProperty\u0000",
            "Property": [
                5,
                83.18869018554688
            ]
        },
        {
            "Name": "FloorModifierFloats\u0000",
            "Type": "FloatProperty\u0000",
            "Property": [
                6,
                89.8341293334961
            ]
        },
        {
            "Name": "FloorModifierFloats\u0000",
            "Type": "FloatProperty\u0000",
            "Property": [
                7,
                3.58504319190979
            ]
        },
        {
            "Name": "FloorModifierFloats\u0000",
            "Type": "FloatProperty\u0000",
            "Property": [
                8,
                42.62271499633789
            ]
        },
        {
            "Name": "FloorModifierFloats\u0000",
            "Type": "FloatProperty\u0000",
            "Property": [
                9,
                26.620075225830078
            ]
        },
        {
            "Name": "FloorPlaySeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                0,
                1583660043
            ]
        },
        {
            "Name": "FloorPlaySeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                1,
                1202677434
            ]
        },
        {
            "Name": "FloorPlaySeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                2,
                1956932687
            ]
        },
        {
            "Name": "FloorPlaySeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                3,
                1880714814
            ]
        },
        {
            "Name": "FloorPlaySeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                4,
                1234976129
            ]
        },
        {
            "Name": "FloorPlaySeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                5,
                -1879021756
            ]
        },
        {
            "Name": "FloorPlaySeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                6,
                -382521689
            ]
        },
        {
            "Name": "FloorPlaySeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                7,
                349204549
            ]
        },
        {
            "Name": "FloorPlaySeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                8,
                -87454865
            ]
        },
        {
            "Name": "FloorPlaySeeds\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                9,
                -660659060
            ]
        },
        {
            "Name": "StairsRoomChosen\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                0,
                1
            ]
        },
        {
            "Name": "RerollRoomChosen\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                1,
                1
            ]
        },
        {
            "Name": "GamblingRoomChosen\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                2,
                1
            ]
        },
        {
            "Name": "GamblingRoomChosen\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                4,
                1
            ]
        },
        {
            "Name": "GamblingRoomChosen\u0000",
            "Type": "IntProperty\u0000",
            "Property": [
                6,
                1
            ]
        }
    ],
    "StoredPropertyType": "BPMRunPropertyStore\u0000"
}

let uut = StructProperty.from(obj2);
// console.log(uut.Property.length)
// let s = 0;
// s += 13;
// s += uut.StoredPropertyType.length + 4;
// s += 17;
for(let i = 0; i < uut.Property.length; i++)
{
    if(uut.Property[i].Type === 'ArrayProperty\0') {
        // console.log(`Property: ${uut.Property[i].Name} Size: ${uut.Property[i].Size}`);
    }
    // s += uut.Property[i].Size;
    // console.log(`Size: ${uut.Property[i].Size}`);
}
console.log(`Property: ${uut.Name} Size: ${uut.Size}`)
// console.log(`Sum: ${s}`)
console.log(uut.serialize().length);
// console.log(uut.serialize());
fs.writeFileSync('./data.out', uut.serialize())