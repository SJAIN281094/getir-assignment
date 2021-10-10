/**
 * @swagger
 * /api/v1/records:
 *  post:
 *    tags:
 *    - "Records"
 *    description: Records
 *    consumes:
 *    - "application/json"
 *    produces:
 *    - "application/json"
 *    parameters:
 *    - name: body
 *      in: body
 *      description: "Records Details"
 *      schema:
 *        type: object
 *        properties:
 *          startDate:
 *            type: string
 *          endDate:
 *            type: string
 *          minCount:
 *            type: number
 *          maxCount:
 *            type: number
 *        required:
 *        - startDate
 *        - endDate
 *        - minCount
 *        - maxCount
 *        example:
 *          startDate: "2016-01-01"
 *          endDate: "2018-01-01"
 *          minCount: 1
 *          maxCount: 5
 *    responses:
 *      '200':
 *        description: Success
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: boolean
 *            data:
 *              type: object
 *              properties:
 *                code:
 *                  type: integer
 *                msg:
 *                  type: string
 *                records:
 *                  type: array
 *                  items:
 *                     type: object
 *                     properties:
 *                       key:
 *                         type: string  
 *                       createdAt:
 *                         type: string  
 *                       totalCount:
 *                         type: integer   
 *      '400':
 *        description: Bad Request
 *        schema:
 *          type: object
 *          properties:
 *            success:
 *              type: boolean
 *            code:
 *              type: integer
 *            error:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 */