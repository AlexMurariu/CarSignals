export const predictionNames = {
    BATTERY: 'battery',
    COOLANT: 'coolant',
    ENGINE: 'engine',
    OIL: 'oil'
}

export const predictionTexts = {
    battery: {
        cause: 'If the light is still on while driving, then there is a problem. The meaning behind this symbol is that there is a battery charging problem, the car is not ' 
                + 'getting enough voltage from the battery. Some issues that could trigger the light to appear are: loose or corroded battery cable, problems with alternator '
                + 'or voltage regulator, damaged cells or plates inside the battery, faulty wiring of the electric charging system.',
        solution: 'Event though this light could mean that the battery should be replaced, it could also mean that it could be an easy to fix issue like corrision or loose clamps. '
                + 'First check for corrosion. Remove the covers on top of the battery or around the terminals. If there is a white or greenish substance then there is corrosion '
                + 'and it can interfere with the conduction of electricity. DO NOT TOUCH THE SUBSTANCE with bare hands because it can cause skin irritation. To clean it just undo the cables, '
                + 'scrub with a toothbrush, that was dipped in a mixture of backing soda and water, and then rinse of the residue with water and dry it. After that reattach the ' 
                + 'cables to the battery. Also, the problem could be loose clamps. Use a small wrench or pliers to tighten them. If it is a more complex problem, consult a professional.'
    },
    coolant: {
        cause: 'If the coolant warning light comes on your dashboard as you are driving along, it is a certain sign that your engine is overheating. The most common reason for the '
                + 'coolant light to become illuminated is simply that the coolant level is too low. There may be a floating sensor in your coolant tank that triggers the warning '
                + 'light when the level drops. Low coolant levels are usually caused by leaks, either in the reservoir or somewhere in the lines. These leaks can be a serious problem, '
                + 'as they are not easily diagnosed and easily fixed. As coolant travels around your engine, there are various places where it can leak from, such as hoses, the water '
                + 'pump or the radiator. If you have checked the coolant level and for leaks and you can see no issue with either, it may be a simple case of sensor malfunction. The sensor ' 
                + 'may be sending incorrect information to the engine’s computer, which in turn is triggering the coolant warning light.',
        solution: 'If the coolant warning light comes on you should stop your car as soon as it is safe to do so. If you continue to drive, ignoring the warning light, you are submitting '
                + 'your engine to temperatures that could cause permanent damage, resulting in expensive repairs. Let the engine cool down for at least thirty minutes first. If you try and ' 
                + 'open the coolant reservoir or the radiator cap whilst the engine is still hot, you run the risk of allowing hot, pressurised steam to blow out and burn you. Once the engine '
                + 'has cooled down, slowly open the coolant reservoir cap, allowing any remaining pressure to be released. Once the pressure has subsided, you can remove the cap fully, check '
                + 'the level of the coolant and top up as required. If you notice any leaks, do not continue your journey. Call your local garage or breakdown service for recovery. If you do ' 
                + 'not notice any leaks and the coolant warning light goes out once you’ve topped up the reservoir, you are alright to continue your journey, although you should keep an eye '
                + 'for the light coming back on again as it may be symptomatic of a problem that may return. The safe thing to do is to have your coolant system checked as soon as possible.'
    },
    engine: {
        cause: 'There are two types of engine warning lights. Check engine light on but steady: A steady light means there’s an issue to be looked into but it’s not very serious at the moment. '
                + 'However, you should book an appointment with your mechanic as soon as possible to avoid possible further damage. Check engine light is on but flashing/blinking or a steady red '
                + 'light: This indicates a more serious issue. The safest option is to safely pull over then shut off the engine. Next, you will need to tow your car to an auto repair shop for '
                + 'diagnosis and repair. The most common reasons the check engine light comes on are: oxygen sensor failure, loose fuel cap, catalytic converter failure, spark plug/ignition coil '
                + 'issues, bad spark plug wires, mass airflow sensor failure, vacuum leak or exhaust gas recirculation valve failure.',
        solution: 'If the check engine light comes on you could look for a serious problem that requires immediate attention. Check your dashboard gauges and lights for indications of low oil '
                + 'pressure or overheating. These conditions mean you should pull over and shut off the engine as soon as you can find a safe place to do so. On some cars, a yellow check engine '
                + 'light means investigate the problem and a red one means stop right now. Try tightening your gas cap. This can often solve the problem. Keep in mind that it may take several '
                + 'trips before the light resets. Some vehicles have a separate indicator that warns of a loose gas cap. Reduce speed and load. If the check engine light is blinking or you notice '
                + 'any serious performance problems, such as a loss of power, reduce your speed and try to reduce the demands on the engine. For example, it would be a good idea to stop towing a '
                + 'trailer. Have the car checked as soon as possible to prevent expensive damage. Use built-in diagnostic services, if available. Many modern cars have integrated remote diagnostic '
                + 'capabilities, with the ability to report on trouble codes and schedule a service appointment.'
    },
    oil: {
        cause: 'The dashboard oil light comes on when your engine suffers a drop in oil pressure. Without enough oil pressure, the engine can’t lubricate itself. Continuous lubrication is '
                + 'necessary for the engine to run, so if it is not adequately lubricated it will seize, and it could stop abruptly, which could cause an accident. By ignoring this alert you '
                + 'could end up needing to make costly repairs to your engine, or in the worst case scenario, buy an entirely new engine, if it runs without enough oil for an extended period '
                + 'of time.',
        solution: 'If the oil light comes on while you are driving, pull over as soon as it is safe and turn the engine off. Next, you will need to check the oil level using the dipstick. '
                + 'If the oil is low, add some engine oil and see if the light goes off. If it does you can continue driving. If the oil level is okay, but the engine is running noisily, the '
                + 'oil pump could be faulty. Do not drive until it is fixed. If the oil level is okay and the engine is running smoothly, your oil sensor could be faulty. You can safely drive, '
                + 'but you will want to get the sensor replaced.'
    }
}