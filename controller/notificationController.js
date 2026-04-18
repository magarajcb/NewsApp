const Notification = require("../models/notification");

const notificationController = {

    getNotifications: async (req, res) => {
        try {
            const notifications = await Notification.find({
                userId: req.user._id
            }).sort({ createdAt: -1 });

            res.status(200).json({
                success: true,
                notifications
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },

    deleteNotification: async (req, res) => {
        try {
            const { id } = req.params;

            const deleted = await Notification.findOneAndDelete({
                _id: id,
                userId: req.user._id
            });

            if (!deleted) {
                return res.status(404).json({
                    success: false,
                    message: "Notification not found"
                });
            }

            res.status(200).json({
                success: true,
                message: "Notification deleted successfully"
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
};

module.exports = notificationController;