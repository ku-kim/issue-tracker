mkdir /home/ec2-user/logs

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

export LOG_FILE_PATH=/home/ec2-user/logs

nohup java -jar -Dspring.profiles.active=prod $JAR_PATH FILE_LOG_PATTERN=> /dev/null 2> /dev/null < /dev/null &
