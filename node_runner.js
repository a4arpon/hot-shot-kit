import { exec } from "node:child_process"

// Function to execute shell commands
function executeCommand(command, callback) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`)
      callback(false, stderr)
      return
    }
    console.log(stdout)
    callback(true, stdout)
  })
}

// Step 1: Install Bun
const installBunCommand = "ls -a && which bun"
console.log("Installing Bun...")
executeCommand(installBunCommand, (success, result) => {
  if (!success) {
    console.error("Failed to install Bun:", result)
    process.exit(1) // Exit the process with a non-zero exit code
  }
  console.log("Bun installation completed.")

  // Step 2: Run ~/.bun/bin/bun run start
  // Assuming the default installation path
  const runBunCommand = "bun run start"
  console.log("Running ~/.bun/bin/bun run start...")
  executeCommand(runBunCommand, (success, result) => {
    if (!success) {
      console.error("Failed to run the command with Bun:", result)
      process.exit(1) // Exit the process with a non-zero exit code
    }
    console.log("Successfully ran the command with Bun:", result)
  })
})
