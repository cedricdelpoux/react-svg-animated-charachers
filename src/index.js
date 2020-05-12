import React from "react"
import styled, {keyframes} from "styled-components"
import {lighten} from "polished"

const ANIMATION_SPEED = ".8s"

const SKIN_COLOR = "#FFDFC4"

const HEAD_RADIUS = "10px"
const HEAD_SIZE = `calc(${HEAD_RADIUS} * 2)`
const HEAD_NECK_WIDTH = "2px;"
const HEAD_NECK_HEIGHT = 5
const HEAD_MOUTH_COLOR = "#92232C"
const HEAD_MOUTH_SKEWX = "-30deg"
const HEAD_HAIR_COLOR = "#663300"

const CHEST_SIZE = "40px"
const CHEST_WIDTH = "8px"

const UPPER_SIZE = `calc(${HEAD_SIZE} + ${HEAD_NECK_HEIGHT}px + ${CHEST_SIZE})`
const SHOULDER_OFFSET = "3px"

const ARM_ANIMATION_ROTATION__START = "-30deg"
const ARM_ANIMATION_ROTATION__END = "60deg"

const HUMERUS_WIDTH = "6px"

const FOREARM_SIZE = "20px"
const FOREARM_WIDTH = "6px"
const FOREARM_ANIMATION_ROTATION__START = "-60deg"
const FOREARM_ANIMATION_ROTATION__END = "-90deg"

const LEG_ANIMATION_ROTATION__START = "-40deg"
const LEG_ANIMATION_ROTATION__END = "35deg"

const FEMUS_SIZE = "20px"
const FEMUS_WIDTH = "6px"
const FEMUS_HEIGHT = 20

const TIBIA_WIDTH = "6px"
const TIBIA_HEIGHT = 20

const CALF_ANIMATION_ROTATION__START = "10deg"
const CALF_ANIMATION_ROTATION__END = "70deg"

const FOOT_WIDTH = "6px"
const FOOT_HEIGHT = 10
const FOOT_ANIMATION_ROTATION__START = "10deg"
const FOOT_ANIMATION_ROTATION__BEFOREFLOOR = "-10deg"
const FOOT_ANIMATION_ROTATION__AFTERFLOOR = "20deg"
const FOOT_ANIMATION_ROTATION__END = "30deg"

const SHIRT_WIDTH = "8px"
const SHIRT_COLOR = "#2CC990"
const SHORT_COLOR = "black"
const SHORT_WIDTH = "8px"
const SHORT_HEIGHT = 20
const SHOE_COLOR = "#F39C12"

const Svg = styled.svg.attrs({viewBox: "-30 -2 80 120"})``

const Lower = styled.g`
  transform: translate(${HEAD_RADIUS}, ${UPPER_SIZE});
`

const Short = styled.g`
  stroke: ${SHORT_COLOR};
  stroke-width: ${SHORT_WIDTH};
`

const ShortUp = styled.line.attrs({
  x1: "0",
  y1: "0",
  x2: "0",
  y2: SHORT_HEIGHT / 2,
})`
  stroke-linecap: round;
`

const ShortDown = styled.line.attrs({
  x1: "0",
  y1: "5",
  x2: "0",
  y2: SHORT_HEIGHT / 2,
})`
  stroke-linecap: square;
`

const Femus = styled.line.attrs({x1: "0", y1: "0", x2: "0", y2: FEMUS_HEIGHT})`
  stroke: ${SKIN_COLOR};
  stroke-width: ${FEMUS_WIDTH};
  stroke-linecap: round;
`

const Calf = styled.g`
  transform-box: fill-box;
  transform-origin: 0;
  transform: translateY(${FEMUS_HEIGHT}px);
`

const Tibia = styled.line.attrs({
  x1: "0",
  y1: 0,
  x2: "0",
  y2: TIBIA_HEIGHT,
})`
  stroke: ${SKIN_COLOR};
  stroke-width: ${TIBIA_WIDTH};
  stroke-linecap: round;
`

const Foot = styled.line.attrs({
  x1: "0",
  y1: TIBIA_HEIGHT,
  x2: FOOT_HEIGHT,
  y2: TIBIA_HEIGHT,
})`
  stroke: ${SKIN_COLOR};
  stroke-width: ${FOOT_WIDTH};
  stroke-linecap: round;
`

const Shoe = styled.line.attrs({
  x1: "0",
  y1: TIBIA_HEIGHT,
  x2: FOOT_HEIGHT,
  y2: TIBIA_HEIGHT,
})`
  stroke: ${SHOE_COLOR};
  stroke-width: ${FOOT_WIDTH};
  stroke-linecap: round;
`

const LeftLeg = styled.g`
  color: ${SKIN_COLOR};
  transform-box: fill-box;
  transform-origin: 0 0;
  ${"" /* animation: leftLegRunning ${ANIMATION_SPEED} infinite; */} ${"" /* transform: rotateZ(${LEG_ANIMATION_ROTATION__START}); */}

  @keyframes leftLegRunning {
    from,
    to {
      transform: rotateZ(${LEG_ANIMATION_ROTATION__START});
    }
    50% {
      transform: rotateZ(${LEG_ANIMATION_ROTATION__END});
    }
  }
`

const LeftCalf = styled.g`
  transform-box: fill-box;
  transform-origin: 0 0;
  transform: rotateZ(${CALF_ANIMATION_ROTATION__START});
  ${"" /* animation: leftCalfRunning ${ANIMATION_SPEED} infinite; */} @keyframes leftCalfRunning {
    from,
    to {
      transform: rotateZ(${CALF_ANIMATION_ROTATION__START});
    }
    50% {
      transform: rotateZ(${CALF_ANIMATION_ROTATION__END});
    }
  }
`

const LeftFoot = styled.g`
  transform-box: fill-box;
  transform-origin: 0 0;
  transform: rotateZ(${FOOT_ANIMATION_ROTATION__START});
  ${"" /* animation: leftFootRunning ${ANIMATION_SPEED} infinite; */} @keyframes leftFootRunning {
    from,
    to {
      transform: rotateZ(${FOOT_ANIMATION_ROTATION__START});
    }
    15%,
    65% {
      transform: rotateZ(${FOOT_ANIMATION_ROTATION__BEFOREFLOOR});
    }
    20%,
    55% {
      transform: rotateZ(${FOOT_ANIMATION_ROTATION__AFTERFLOOR});
    }
    50% {
      transform: rotateZ(${FOOT_ANIMATION_ROTATION__END});
    }
  }
`

const RightLeg = styled.g`
  color: ${SKIN_COLOR};
  transform-box: fill-box;
  transform-origin: 0 0;
  animation: rightLegRunning ${ANIMATION_SPEED} infinite;
  transform: rotateZ(${LEG_ANIMATION_ROTATION__END});

  @keyframes rightLegRunning {
    from,
    to {
      transform: rotateZ(${LEG_ANIMATION_ROTATION__END});
    }
    50% {
      transform: rotateZ(${LEG_ANIMATION_ROTATION__START});
    }
  }
`

const RightCalf = styled.g`
  transform-box: fill-box;
  transform-origin: 0 0;
  transform: rotateZ(${CALF_ANIMATION_ROTATION__END});
  animation: rightCalfRunning ${ANIMATION_SPEED} infinite;

  @keyframes rightCalfRunning {
    from,
    to {
      transform: rotateZ(${CALF_ANIMATION_ROTATION__END});
    }
    50% {
      transform: rotateZ(${CALF_ANIMATION_ROTATION__START});
    }
  }
`

const RightFoot = styled.g`
  transform-box: fill-box;
  transform-origin: 0 0;
  transform: rotateZ(${FOOT_ANIMATION_ROTATION__START});
  animation: rightFootRunning ${ANIMATION_SPEED} infinite;

  @keyframes rightFootRunning {
    from,
    to {
      transform: rotateZ(${FOOT_ANIMATION_ROTATION__END});
    }
    40%,
    5% {
      transform: rotateZ(${FOOT_ANIMATION_ROTATION__AFTERFLOOR});
    }
    65%,
    15% {
      transform: rotateZ(${FOOT_ANIMATION_ROTATION__BEFOREFLOOR});
    }
    50% {
      transform: rotateZ(${FOOT_ANIMATION_ROTATION__START});
    }
  }
`

const Face = styled.circle.attrs({cx: "10", cy: "10", r: "10"})`
  fill: ${SKIN_COLOR};
`

const Hair = styled.path.attrs({
  d:
    "M17.776058,0.640464561 C16.0097111,1.62470515 12.4371594,1.62470517 12.4371594,1.62470517 C12.4371594,1.62470517 4.39241145,0.520057594 1.56803908,8.14091714 C-1.35826917,16.036825 5.72481654,20.5129729 5.72481654,20.5129729 C6.12426548,15.3735416 8.23954171,14.4169148 8.23954171,14.4169148 C8.23954171,14.4169148 5.7248166,12.8486612 7.83905868,9.78215195 C9.31808738,8.14091708 9.7352213,12.1612518 9.7352213,12.1612518 C9.7352213,12.1612518 9.60696124,8.38461393 11.2230642,7.22929456 C12.4371593,6.29000928 18.5430792,5.59497573 18.5430792,5.59497573 C18.5430792,5.59497573 18.1630266,2.38857927 17.776058,0.640464561 Z",
})`
  transform: translate(-1px, -2px);
  fill: ${HEAD_HAIR_COLOR};
`

const Mouth = styled.circle.attrs({cx: "16.5", cy: "16.5", r: "1"})`
  fill: ${HEAD_MOUTH_COLOR};
  transform-box: fill-box;
  transform-origin: center center;
  transform: scale(1) skewX(${HEAD_MOUTH_SKEWX});
  animation: mouthBreathing ${ANIMATION_SPEED} infinite;

  @keyframes mouthBreathing {
    from,
    to {
      transform: scale(1) skewX(${HEAD_MOUTH_SKEWX});
    }
    40% {
      transform: scale(0.8) skewX(${HEAD_MOUTH_SKEWX});
    }
    20%,
    50%,
    60% {
      transform: scale(0.7) skewX(${HEAD_MOUTH_SKEWX});
    }
  }
`

const Neck = styled.line.attrs({
  x1: "0",
  y1: "0",
  x2: "0",
  y2: HEAD_NECK_HEIGHT,
})`
  stroke: ${SKIN_COLOR};
  stroke-width: ${HEAD_NECK_WIDTH};
  transform: translate(${HEAD_RADIUS}, ${HEAD_SIZE});
`

const Body = styled.g`
  transform: translate(
    ${HEAD_RADIUS},
    calc(${HEAD_SIZE} + ${HEAD_NECK_HEIGHT}px)
  );
`

const Chest = styled.g`
  stroke: ${SHIRT_COLOR};
  stroke-width: ${CHEST_WIDTH};
`

const ChestUp = styled.line.attrs({x1: "0", y1: "0", x2: "0", y2: "20"})`
  stroke-linecap: round;
`

const ChestDown = styled.line.attrs({x1: "0", y1: "20", x2: "0", y2: "35"})`
  stroke-linecap: square;
`

const ShirtArm = styled.g`
  stroke: ${SHIRT_COLOR};
  stroke-width: ${SHIRT_WIDTH};
`

const ShirtShoulder = styled.line.attrs({x1: "0", y1: "0", x2: "0", y2: "5"})`
  stroke-linecap: round;
`

const ShirtSleeve = styled.line.attrs({x1: "0", y1: "4", x2: "0", y2: "5"})`
  stroke-linecap: square;
`

const Humerus = styled.line.attrs({x1: "0", y1: "0", x2: "0", y2: "20"})`
  stroke: currentColor;
  stroke-width: ${HUMERUS_WIDTH};
  stroke-linecap: round;
`

const Forearm = styled.g`
  stroke: ${SKIN_COLOR};
  stroke-width: ${FOREARM_WIDTH};
  stroke-linecap: round;
  transform: translateY(${FOREARM_SIZE});
`

const Cubitus = styled.line.attrs({x1: "0", y1: "0", x2: "0", y2: "10"})`
  stroke: currentColor;
`

const Hand = styled.line.attrs({x1: "0", y1: "0", x2: "0", y2: "2"})`
  transform-box: fill-box;
  transform-origin: 0 0;
  transform: translate(1px, 15px) rotateZ(-20deg);
  stroke: currentColor;
  stroke-width: 8px;
`

const Arm = styled.g`
  transform-box: fill-box;
  transform-origin: -${SHOULDER_OFFSET} top;
  color: ${SKIN_COLOR};
`

const LeftArm = styled(Arm)`
  transform: rotateZ(${ARM_ANIMATION_ROTATION__END})
    translate(-${SHOULDER_OFFSET}, 0);
  animation: left-arm-running ${ANIMATION_SPEED} infinite;

  @keyframes left-arm-running {
    from,
    to {
      transform: rotateZ(${ARM_ANIMATION_ROTATION__END})
        translate(-${SHOULDER_OFFSET}, 0);
      transform-origin: -${SHOULDER_OFFSET} top;
    }
    50% {
      transform: rotateZ(${ARM_ANIMATION_ROTATION__START})
        translate(${SHOULDER_OFFSET}, 0);
      transform-origin: ${SHOULDER_OFFSET} top;
    }
  }
`

const RightArm = styled(Arm)`
  transform: rotateZ(${ARM_ANIMATION_ROTATION__START})
    translate(${SHOULDER_OFFSET}, 0);
  animation: rightArmRunning ${ANIMATION_SPEED} infinite;

  @keyframes rightArmRunning {
    from,
    to {
      transform: rotateZ(${ARM_ANIMATION_ROTATION__START})
        translate(${SHOULDER_OFFSET}, 0);
      transform-origin: ${SHOULDER_OFFSET} top;
    }
    50% {
      transform: rotateZ(${ARM_ANIMATION_ROTATION__END})
        translate(-${SHOULDER_OFFSET}, 0);
      transform-origin: -${SHOULDER_OFFSET} top;
    }
  }
`

const LeftForearm = styled.g`
  transform-box: fill-box;
  transform-origin: top;
  transform: rotateZ(${FOREARM_ANIMATION_ROTATION__START});
  animation: leftForearmRunning ${ANIMATION_SPEED} infinite;

  @keyframes leftForearmRunning {
    from,
    to {
      transform: rotateZ(${FOREARM_ANIMATION_ROTATION__START});
    }
    50% {
      transform: rotateZ(${FOREARM_ANIMATION_ROTATION__END});
    }
  }
`

const RightForearm = styled.g`
  transform-box: fill-box;
  transform-origin: top;
  transform: rotateZ(${FOREARM_ANIMATION_ROTATION__END});
  animation: rightForearmRunning ${ANIMATION_SPEED} infinite;

  @keyframes rightForearmRunning {
    from,
    to {
      transform: rotateZ(${FOREARM_ANIMATION_ROTATION__END});
    }
    50% {
      transform: rotateZ(${FOREARM_ANIMATION_ROTATION__START});
    }
  }
`

const Character = () => (
  <Svg height="100">
    <g id="man">
      <Lower>
        <LeftLeg>
          <Femus />
          <Short>
            <ShortUp />
            <ShortDown />
          </Short>
          <Calf>
            <LeftCalf>
              <Tibia />
              <LeftFoot>
                <Foot />
                <Shoe />
              </LeftFoot>
            </LeftCalf>
          </Calf>
        </LeftLeg>
        <RightLeg>
          <Femus />
          <Short>
            <ShortUp />
            <ShortDown />
          </Short>
          <Short>
            <ShortUp />
            <ShortDown />
          </Short>
          <Calf>
            <RightCalf>
              <Tibia />
              <RightFoot>
                <Foot />
                <Shoe />
              </RightFoot>
            </RightCalf>
          </Calf>
        </RightLeg>
      </Lower>
      <g>
        <Face />
        <Hair />
        <Mouth />
        <Neck />
        <Body>
          <LeftArm>
            <Humerus />
            <ShirtArm>
              <ShirtShoulder />
              <ShirtSleeve />
            </ShirtArm>
            <Forearm>
              <LeftForearm>
                <Cubitus />
                <Hand />
              </LeftForearm>
            </Forearm>
          </LeftArm>
          <Chest>
            <ChestUp />
            <ChestDown />
          </Chest>
          <RightArm>
            <Forearm>
              <RightForearm>
                <Cubitus />
                <Hand />
              </RightForearm>
            </Forearm>
            <Humerus />
            <ShirtArm>
              <ShirtShoulder />
              <ShirtSleeve />
            </ShirtArm>
          </RightArm>
        </Body>
      </g>
    </g>
  </Svg>
)

export default Character
