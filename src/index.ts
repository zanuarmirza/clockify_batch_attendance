import 'dotenv/config' 
import { addTimeEntry } from "./clockify/index.js";
import { workTimeFactory } from "./work-time/index.js";

async function init(){
  // TODO take start end date from config 
  const timeEntries = workTimeFactory({
    start: new Date("2022-06-07"),
    end: new Date("2022-06-13"),
  });
  for (const item of timeEntries) {
    console.log("==================");
    console.log("adding: ", item.start);
    await addTimeEntry(item);
    console.log("done");
  }
}
init()

