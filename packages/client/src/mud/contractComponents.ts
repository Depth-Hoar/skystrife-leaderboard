/* Autogenerated file. Do not edit manually. */

import { TableId } from "@latticexyz/common";
import { defineComponent, Type as RecsType, World } from "@latticexyz/recs";

export function defineContractComponents(world: World) {
  return {
    Admin: (() => {
      const tableId = new TableId("", "Admin");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    ArmorModifier: (() => {
      const tableId = new TableId("", "ArmorModifier");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Recipient: (() => {
      const tableId = new TableId("", "Recipient");
      return defineComponent(
        world,
        {
          value: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Capturable: (() => {
      const tableId = new TableId("", "Capturable");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Capturer: (() => {
      const tableId = new TableId("", "Capturer");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    ChargedByStart: (() => {
      const tableId = new TableId("", "ChargedByStart");
      return defineComponent(
        world,
        {
          value: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Chargee: (() => {
      const tableId = new TableId("", "Chargee");
      return defineComponent(
        world,
        {
          value: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Charger: (() => {
      const tableId = new TableId("", "Charger");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    ChargeCap: (() => {
      const tableId = new TableId("", "ChargeCap");
      return defineComponent(
        world,
        {
          cap: RecsType.Number,
          totalCharged: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Combat: (() => {
      const tableId = new TableId("", "Combat");
      return defineComponent(
        world,
        {
          health: RecsType.Number,
          maxHealth: RecsType.Number,
          armor: RecsType.Number,
          strength: RecsType.Number,
          structureStrength: RecsType.Number,
          counterStrength: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    StaminaOnKill: (() => {
      const tableId = new TableId("", "StaminaOnKill");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    CombatResult: (() => {
      const tableId = new TableId("", "CombatResult");
      return defineComponent(
        world,
        {
          attacker: RecsType.String,
          defender: RecsType.String,
          attackerDamageReceived: RecsType.Number,
          defenderDamageReceived: RecsType.Number,
          attackerHealth: RecsType.Number,
          defenderHealth: RecsType.Number,
          attackerDamage: RecsType.Number,
          defenderDamage: RecsType.Number,
          ranged: RecsType.Boolean,
          attackerDied: RecsType.Boolean,
          defenderDied: RecsType.Boolean,
          defenderCaptured: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    CombatCost: (() => {
      const tableId = new TableId("", "CombatCost");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    CombatStrength: (() => {
      const tableId = new TableId("", "CombatStrength");
      return defineComponent(
        world,
        {
          combatTypeStrengthBonuses: RecsType.NumberArray,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    StrengthMod: (() => {
      const tableId = new TableId("", "StrengthMod");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    EscapePortal: (() => {
      const tableId = new TableId("", "EscapePortal");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Factory: (() => {
      const tableId = new TableId("", "Factory");
      return defineComponent(
        world,
        {
          prototypeIds: RecsType.StringArray,
          staminaCosts: RecsType.NumberArray,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Inventory: (() => {
      const tableId = new TableId("", "Inventory");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    ItemType: (() => {
      const tableId = new TableId("", "ItemType");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    KillCount: (() => {
      const tableId = new TableId("", "KillCount");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    LastAction: (() => {
      const tableId = new TableId("", "LastAction");
      return defineComponent(
        world,
        {
          value: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Match: (() => {
      const tableId = new TableId("", "Match");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    MatchSpawnPoints: (() => {
      const tableId = new TableId("", "MatchSpawnPoints");
      return defineComponent(
        world,
        {
          value: RecsType.StringArray,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    MatchSky: (() => {
      const tableId = new TableId("", "MatchSky");
      return defineComponent(
        world,
        {
          blockNumber: RecsType.BigInt,
          reward: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    SkyPoolConfig: (() => {
      const tableId = new TableId("", "SkyPoolConfig");
      return defineComponent(
        world,
        {
          cost: RecsType.BigInt,
          window: RecsType.BigInt,
          entity: RecsType.String,
          token: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    MatchConfig: (() => {
      const tableId = new TableId("", "MatchConfig");
      return defineComponent(
        world,
        {
          startTime: RecsType.BigInt,
          turnLength: RecsType.BigInt,
          actionCooldownLength: RecsType.BigInt,
          levelId: RecsType.String,
          createdBy: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    MatchFinished: (() => {
      const tableId = new TableId("", "MatchFinished");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    MatchMapCopyProgress: (() => {
      const tableId = new TableId("", "MatchMapCopyProg");
      return defineComponent(
        world,
        {
          value: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    MatchReady: (() => {
      const tableId = new TableId("", "MatchReady");
      return defineComponent(
        world,
        {
          value: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    MatchRanking: (() => {
      const tableId = new TableId("", "MatchRanking");
      return defineComponent(
        world,
        {
          value: RecsType.StringArray,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    MatchReward: (() => {
      const tableId = new TableId("", "MatchReward");
      return defineComponent(
        world,
        {
          token: RecsType.String,
          value: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    LatestMatch: (() => {
      const tableId = new TableId("", "LatestMatch");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Movable: (() => {
      const tableId = new TableId("", "Movable");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    MoveDifficulty: (() => {
      const tableId = new TableId("", "MoveDifficulty");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Name: (() => {
      const tableId = new TableId("", "Name");
      return defineComponent(
        world,
        {
          value: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    OwnedBy: (() => {
      const tableId = new TableId("", "OwnedBy");
      return defineComponent(
        world,
        {
          value: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Player: (() => {
      const tableId = new TableId("", "Player");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    PlayerReady: (() => {
      const tableId = new TableId("", "PlayerReady");
      return defineComponent(
        world,
        {
          value: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Position: (() => {
      const tableId = new TableId("", "Position");
      return defineComponent(
        world,
        {
          x: RecsType.Number,
          y: RecsType.Number,
          z: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Prototype: (() => {
      const tableId = new TableId("", "Prototype");
      return defineComponent(
        world,
        {
          value: RecsType.StringArray,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    PrototypeContent: (() => {
      const tableId = new TableId("", "PrototypeContent");
      return defineComponent(
        world,
        {
          value: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    MapSize: (() => {
      const tableId = new TableId("", "MapSize");
      return defineComponent(
        world,
        {
          value: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    MapTemplates: (() => {
      const tableId = new TableId("", "MapTemplates");
      return defineComponent(
        world,
        {
          value: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Map: (() => {
      const tableId = new TableId("", "Map");
      return defineComponent(
        world,
        {
          value: RecsType.StringArray,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    MapContent: (() => {
      const tableId = new TableId("", "MapContent");
      return defineComponent(
        world,
        {
          value: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Range: (() => {
      const tableId = new TableId("", "Range");
      return defineComponent(
        world,
        {
          min: RecsType.Number,
          max: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    SpawnReservedBy: (() => {
      const tableId = new TableId("", "SpawnReservedBy");
      return defineComponent(
        world,
        {
          value: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    ResourceSpawn: (() => {
      const tableId = new TableId("", "ResourceSpawn");
      return defineComponent(
        world,
        {
          value: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Spawned: (() => {
      const tableId = new TableId("", "Spawned");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    SpawnPoint: (() => {
      const tableId = new TableId("", "SpawnPoint");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Stamina: (() => {
      const tableId = new TableId("", "Stamina");
      return defineComponent(
        world,
        {
          current: RecsType.Number,
          max: RecsType.Number,
          regeneration: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    StamRegenCap: (() => {
      const tableId = new TableId("", "StamRegenCap");
      return defineComponent(
        world,
        {
          totalRegenerated: RecsType.Number,
          cap: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    StructureType: (() => {
      const tableId = new TableId("", "StructureType");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    TerrainType: (() => {
      const tableId = new TableId("", "TerrainType");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    UnitType: (() => {
      const tableId = new TableId("", "UnitType");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    TokenMetadata: (() => {
      const tableId = new TableId("", "TokenMetadata");
      return defineComponent(
        world,
        {
          name: RecsType.String,
          emoji: RecsType.String,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    TokenBalance: (() => {
      const tableId = new TableId("", "TokenBalance");
      return defineComponent(
        world,
        {
          value: RecsType.BigInt,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Untraversable: (() => {
      const tableId = new TableId("", "Untraversable");
      return defineComponent(
        world,
        {
          value: RecsType.Boolean,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
    Tier: (() => {
      const tableId = new TableId("", "Tier");
      return defineComponent(
        world,
        {
          value: RecsType.Number,
        },
        {
          metadata: {
            contractId: tableId.toHex(),
            tableId: tableId.toString(),
          },
        }
      );
    })(),
  };
}
