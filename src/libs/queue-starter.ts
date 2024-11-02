import type { Worker } from "bullmq"

type QueueConstructor = {
  new (): {
    worker: Worker
  }
}

export async function startQueues(Queues: QueueConstructor[]) {
  const queues = []

  for (const queue of Queues) {
    const queueInstance = new queue()
    queues.push(queueInstance.worker)
  }

  await Promise.all(queues)
}
