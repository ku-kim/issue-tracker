REPO=/home/ec2-user/issue-tracker

cd $REPO

JAR_NAME=$(ls $REPO/build/libs | grep '.jar' | tail -n 1)
JAR_PATH=$REPO/build/libs/$JAR_NAME

SPRINGBOOT_PID=`jps | grep jar | cut -d' ' -f1`
if [ -z $SPRINGBOOT_PID ]
then
    echo "> Nothing to end."
else
    echo "> kill -15 $SPRINGBOOT_PID"
    kill -15 $SPRINGBOOT_PID
    sleep 25
fi

echo "> $JAR_PATH deploy"

nohup java -jar $JAR_PATH >> /home/ec2-user/Issues-tracker-deploy.log 2>&1 &
