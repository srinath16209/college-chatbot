def get_response(message):
    message = message.lower()

    if "admission" in message:
        return "Admissions are open until July 31st. Visit the Admissions page for details."
    elif "courses" in message:
        return "We offer B.Tech, M.Tech, and PhD programs in AI, IoT, and Smart Cities."
    elif "events" in message:
        return "Upcoming event: AI Symposium on Sept 15th. Register via the Events page."
    elif "contact" in message:
        return "You can reach us at info@college.edu or call +91-9876543210."
    else:
        return "I'm not sure about that. Please check the college website or contact support."

