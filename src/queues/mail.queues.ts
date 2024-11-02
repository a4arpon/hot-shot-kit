import { type Job, Worker } from "bullmq"
import { redis } from "#libs/conn"

export class MailQueue {
  public readonly worker: Worker

  constructor() {
    this.worker = new Worker(
      MailQueue.name,
      async (job) => this.processor(job),
      {
        autorun: false,
        connection: redis,
      },
    )

    this.worker.on("ready", this.ready)
    this.worker.on("failed", (job, err) => this.failed(err, job))
    this.worker.on("completed", (job) => this.completed(job))
  }

  private async processor(job: Job) {
    console.log("Mail Queue Processor Running...")
    console.log(job.data)
  }

  private failed(err: Error, job?: Job) {
    if (job) {
      console.error("Mail Queue Job Failed:", err)
    } else {
      console.error("Mail Queue Job Not Found:", err)
    }
  }

  private ready = () => {
    console.log("Mail Queue Ready...")
  }

  private completed(job: Job) {
    console.log("Mail Queue Job Completed:", job)
  }
}
