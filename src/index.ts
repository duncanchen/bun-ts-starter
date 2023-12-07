import { container } from "./load-test";
import { pagingWithinPartition } from "@blackie-ops/cosmosdb";

const getSome = async () => {
  for await (const docs of
    pagingWithinPartition(container, "user", 30)()) {
    console.log(`received ${docs.length} docs`);
  }
};

await getSome();

// try {
//   const { resource, statusCode } = await container.items.upsert({
//     id: "1",
//     entity: "yo",
//   });
//   console.log("done", statusCode, resource);
// } catch (e) {
//   console.log(e);
// }
