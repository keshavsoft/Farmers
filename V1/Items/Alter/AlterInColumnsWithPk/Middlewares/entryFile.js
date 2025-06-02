const CommonColumnsArray = ["ItemName", "ItemRate"];

const StartFunc = (req, res, next) => {
    const LocalBody = req.body;

    if (!LocalBody || typeof LocalBody !== 'object') {
        return res.status(400).send("Invalid request body.");
    }

    if (Array.isArray(LocalBody)) {
        return res.status(400).send("Remove the array from the body.");
    }

    if (Object.keys(LocalBody).length === 0) {
        return res.status(400).send("Request body should not be empty.");
    }

    // ✅ Strict key match (no extra keys)
    const bodyKeys = Object.keys(LocalBody).sort();
    const requiredKeys = CommonColumnsArray.sort();

    const isExactMatch = JSON.stringify(bodyKeys) === JSON.stringify(requiredKeys);

    if (!isExactMatch) {
        return res.status(400).send(`Enter mandate keys: ${CommonColumnsArray.join(", ")}`);
    }

    next();
};

export { StartFunc };
