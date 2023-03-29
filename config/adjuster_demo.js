function sync(doc, oldDoc, meta) {
    if (doc._deleted) {
        return;
    }

    if (!doc.division) {
        console.log("Sync function: document does not have division key");
        return;
    }

    try {
        var division = doc.division;
        var username = "division@" + division;
        var channelId = "channel." + username;

        console.log("Processing doc for channel " + channelId);
        requireUser(username);
        channel(channelId);
        access(username,channelId);
    } catch (error) {
        console.log("Sync function error: " + error.message);
        throw({forbidden: error.message});
    }
}
