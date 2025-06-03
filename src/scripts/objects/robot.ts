import Toy from "./toy";
import { GridUtils } from "../utils/grid";
import { Coordinate, State, DirectionType, RotationType } from "../utils/types";
import { CARDINAL_DIRECTIONS } from "../utils/helpers";
import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config();

export default class Robot extends Toy {
  constructor() {
    super();
  }

  getState() {
    return { ...this.state };
  }

  setState(newState: State, userId: string) {
    this.state = {
      ...newState,
      position: { ...newState.position },
      facing: newState.facing,
    };
    this.saveToDatabase(newState, userId);
  }

  async saveToDatabase(robotState: any, userId: string) {
    const supabase = createClient(process.env.DB_DOMAIN!, process.env.DB_KEY!);

    const { data, error } = await supabase
      .from("Robots")
      .upsert(
        { robot_data: robotState, user_id: userId },
        { onConflict: "user_id" }
      )
      .select();

    // console.log(data ?? error);
  }

  place(
    position: Coordinate,
    dir: DirectionType,
    userId: string
  ): { message: string; robot: Robot } {
    try {
      this.setState(
        {
          ...this.getState(),
          position,
          facing: dir,
        },
        userId
      );

      return {
        message: `Placed Robot at x:${position.x}, y:${
          position.y
        }, facing ${dir.toLowerCase()}`,
        robot: this,
      };
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  }

  move(userId: string): { message: string; robot: Robot } {
    try {
      const currentState = this.getState();
      const newState = {
        ...currentState,
        position: { ...currentState.position },
        facing: currentState.facing,
      };

      switch (currentState.facing) {
        case "NORTH":
          newState.position.y++;
          break;
        case "EAST":
          newState.position.x++;
          break;
        case "SOUTH":
          newState.position.y--;
          break;
        case "WEST":
          newState.position.x--;
          break;
      }

      // console.log(this.getState());
      GridUtils.validatePosition(newState.position);
      this.setState(newState, userId);
      return {
        message: `Moved ${
          currentState.facing!.toLowerCase() || ""
        }; New position is x:${newState.position.x}, y:${newState.position.y}`,
        robot: this,
      };
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  }

  rotate(dir: RotationType, userId: string): { message: string; robot: Robot } {
    try {
      const currentState = this.getState();
      const rotationStep = dir === "RIGHT" ? 1 : -1;
      const newDirectionIndex =
        (CARDINAL_DIRECTIONS.indexOf(currentState.facing || "") +
          rotationStep +
          CARDINAL_DIRECTIONS.length) %
        CARDINAL_DIRECTIONS.length;
      this.setState(
        {
          ...currentState,
          facing: CARDINAL_DIRECTIONS[newDirectionIndex] as DirectionType,
        },
        userId
      );
      return {
        message: `Rotated ${dir.toLowerCase()}`,
        robot: this,
      };
    } catch (error) {
      throw error instanceof Error ? error : new Error(String(error));
    }
  }
}
