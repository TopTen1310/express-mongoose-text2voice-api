const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const projectController = require('../../controllers/project.controller');
const projectValidation = require('../../validations/project.validation');
const router = express.Router();

router.post('/text2voice', auth(), validate(projectValidation.text2Voice), projectController.generateVoiceFromText)

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Project
 *   description: Generate Voices
 */

/**
 * @swagger
 * /projects/text2voice:
 *   post:
 *     summary: Generate voice file from text
 *     tags: [Project]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - data
 *             properties:
 *               data:
 *                 type: object
 *             example:
 *               data: [{ type: "volume", value: 3 }]
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 url:
 *                   type: string
 *               example:
 *                 url: https://aws.s3.com/cloned_voice.mp3
 *       "400":
 *         description: Failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *               example:
 *                 message: Failed to generate voice from text. Contact to admin.
 */