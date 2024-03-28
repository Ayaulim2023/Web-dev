def alarm_clock(day, vacation):
    if vacation:
        if day in [0, 6]:  # Weekend
            return 'off'
        else:  # Weekday
            return '10:00'
    else:
        if day in [0, 6]:  # Weekend
            return '10:00'
        else:  # Weekday
            return '7:00'
