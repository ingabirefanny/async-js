// q1
async function logMessageWithDelay(message, delayTime) {
    await new Promise(resolve => setTimeout(resolve, delayTime));
    console.log(message);
}

logMessageWithDelay("I know who I am!", 2000);

// q2

const userIds = [1, 2, 3, 4, 5];

async function getUserData(id) {
    const response = await fetch;
    if (!response.ok) {
        throw new Error(`Failed to fetch user data for ID ${id}`);
    }
    return await response.json();
}
async function fetchAndLogUserData() {
    try {
        for (const id of userIds) {
            const userData = await getUserData(id);
            console.log(`User data for ID ${id}:`, userData);
        }
    } catch (error) {
        console.error('Error fetching user data:', error.message);
    }
}
fetchAndLogUserData();

// q3

async function handleTask() {
    try {
      const result = await performTask();
      console.log("Task completed successfully:", result);
    } catch (error) {
      console.error("Error occurred during task:", error.message);
    }
  }
    handleTask();

    //q4

function unstableTask(taskName, failureProbability) {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random(); 
        if (randomValue > failureProbability) {
            resolve(`Task '${taskName}' succeeded!`);
        } else {
            reject(`Task '${taskName}' failed!`);
        }
    });
}

async function executeWithRetry(taskName, retries, failureProbability) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            await unstableTask(taskName, failureProbability);
            console.log(`Attempt ${attempt}: Task '${taskName}' succeeded.`);
            return;
        } catch (error) {
            console.log(`Attempt ${attempt}: ${error}`);
        }
    }
    console.log(`All ${retries} attempts failed for task '${taskName}'.`);
}

let taskName = ' Task';
let retries = 2;
let failureProbability = 0.2; 

executeWithRetry(taskName, retries, failureProbability);

  
