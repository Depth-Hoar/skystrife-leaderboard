import { useEntityQuery, useComponentValue } from "@latticexyz/react";
import { Has, HasValue, getComponentValueStrict, runQuery, getComponentValue, Not } from "@latticexyz/recs";
import { toEthAddress } from "@latticexyz/utils";
import { decodeEntity } from "@latticexyz/store-sync/recs";
import { useMUD } from "./MUDContext";
import { OverlineLarge, OverlineSmall } from "./Theme/SkyStrife/Typography";
import { Orbs } from "./Theme/SkyStrife/Orbs";

const TOKEN_ID =
  "0x4d616e6100000000000000000000000000000000000000000000000000000000";

export const App = () => {
  const {
    components: { 
      tables,
      TokenBalance, 
      Combat, 
      CombatResult,
      MatchConfig, 
      Match, 
      KillCount, 
      UnitType, 
      MatchReward,
      MatchReady,
      Position,
      TerrainType,
      MatchFinished
    },
  } = useMUD();


  
  // console.log(Combat.schema,'combat');
  console.log(tables,'tables');
  // console.log(Match,'Match');
  //runQuery([Has(MatchConfig), HasValue(Match, { value: 4 })])
  // console.log(TokenBalance.metadata.keySchema,"keySchema")

  const matchId = 310
  const matchIdEntity = useEntityQuery([Has(MatchConfig), HasValue(Match, { value: matchId  })])
  // console.log(matchIdEntity,"match entity")
  const config = useComponentValue(MatchConfig, matchIdEntity);
  const rewards = useComponentValue(MatchReward, matchIdEntity);
  // console.log(config,"config")
  // console.log(rewards,"rewards")
  // const matchNumber = config.matchNumber;
  // console.log(KillCount,"kill count")
  // console.log(MatchConfig,"MatchConfig")
  // console.log(UnitType,"UnitType")
  const getUnitType = UnitType.metadata.keySchema;
  // const getUnitTypes = useEntityQuery([Has(matchNumber),HasValue(UnitType, { value: 100  })])
  
  // console.log(getUnitType,"get unit type")



  const entitiesInMatch = [...runQuery([HasValue(Match, { matchId: matchId })])];

  console.log(entitiesInMatch,"entities in match")
  
  entitiesInMatch.forEach(entity => {
    const killCount = getComponentValue(KillCount, entity);
    if (!killCount) {
      console.log(`Entity ${entity} has no kills`);
      return;
    }  
  
    console.log(`Entity ${entity} has ${killCount.value} kills`);
  });





  // const test = [...runQuery([HasValue(Position, { z: matchEntity })])].forEach(entity => {
  //   const killCount = getComponentValue(KillCount, entity);
  //   if (!killCount) {
  //     console.log(`Entity ${entity} has no kills`);
  //   }  
  
  //   console.log(`Entity ${entity} has ${killCount.value} kills`);
  // });

  // ---------------------This code works don't loose it----------------------------------------------------------------
  // const test = [...runQuery([HasValue(Position, { z: matchId}, Not(TerrainType))])]
  // console.log(test,"test");



  function logKillCounts() {
    const matchEntity = 10; // match number
  
    [...runQuery([HasValue(Position, { z: matchEntity })])].forEach(entity => {
      const killCount = getComponentValue(KillCount, entity);
      if (!killCount) {
        console.log(`Entity ${entity} has no kills`);
        return;
      }  
  
      console.log(`Entity ${entity} has ${killCount.value} kills`);
    });
  }

  // function Capturable() {
  //   const matchEntity = 310;
  
  //   [...runQuery([HasValue(Capturable, { z: matchEntity })])].forEach(entity => {
  //     const killCount = getComponentValue(KillCount, entity);
  //     if (!killCount) {
  //       console.log(`Entity ${entity} has no kills`);
  //       return;
  //     }  
  
  //     console.log(`Entity ${entity} has ${killCount.value} kills`);
  //   });
  // }
  
  logKillCounts();



  
  const balances = useEntityQuery([Has(TokenBalance)])
    .filter((entity) => {
      return (
        decodeEntity(TokenBalance.metadata.keySchema, entity).token === TOKEN_ID
      );
    })
    .map((entity) => {
      const owner = decodeEntity(
        TokenBalance.metadata.keySchema,
        entity
      ).entity;
      const { value } = getComponentValueStrict(TokenBalance, entity);

      return { entity: owner, value };
    });

  balances.sort((a, b) => Number(b.value - a.value));

  return (
    <div className="bg-slate-200 min-h-screen h-fit">
      <div className="p-8">
        <OverlineLarge>Sky Strife Leaderboard</OverlineLarge>

        <div className="flex">
          <div>
            <OverlineSmall className="mb-3 text-ss-text-x-light">
              Player
            </OverlineSmall>
            {balances.map((b) => (
              <div key={b.entity}>{toEthAddress(b.entity)}</div>
            ))}
            <div className="h-2" />
          </div>

          <div className="w-16" />

          <div>
            <OverlineSmall className="mb-3 text-ss-text-x-light">
              Balance
            </OverlineSmall>
            {balances.map((b) => (
              <Orbs key={b.entity} amount={b.value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
