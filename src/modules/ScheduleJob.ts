import schedule from 'node-schedule';

export function ScheduleJob(callBack: schedule.JobCallback) {
    const rule = new schedule.RecurrenceRule();

    rule.hour = 8;
    rule.minute = 0;
    
    return schedule.scheduleJob(rule, callBack)
}
