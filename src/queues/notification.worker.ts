import { type Job, Worker } from "bullmq"
import { notificationQueue, redis } from "#libs/conn"

export class NotificationQueueWorker {
  public readonly worker: Worker

  constructor() {
    this.worker = new Worker(
      notificationQueue.name,
      async (job: Job) => this.processing(job),
      {
        autorun: false,
        connection: redis,
      },
    )

    this.worker.on("ready", this.ready)
    this.worker.on("failed", (job, err) => this.failed(err, job))
    this.worker.on("completed", (job) => this.completed(job))
  }

  private failed(err: Error, job?: Job) {
    if (job) {
      console.error(notificationQueue.name, "Job Failed :", job.id, err)
    } else {
      console.error(notificationQueue.name, "Job Not Found :", err)
    }
  }

  private ready = () => {
    console.log(notificationQueue.name, "Ready...")
  }

  private completed(job: Job) {
    console.log(notificationQueue.name, "Job Completed :", job.id)
  }

  /*
   * ---------------------------------------------------------------------
   * Queue Processing Function
   *
   * This function is called by the queue worker when a job is processed.
   * The job is passed as a parameter.
   * Write your processing logic here.
   * ---------------------------------------------------------------------
   */

  private async processing(job: Job) {
    console.log(job.data)
  }
}
