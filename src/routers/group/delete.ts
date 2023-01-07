import { Router, Request, Response, NextFunction } from 'express'
import Group from '../../models/group'

const router = Router()

router.delete('/group/delete/:id', async (req: Request, res: Response, next:NextFunction) => {
    const { id } = req.params;

    if(!id) {
        const error = new Error('group id is required') as CustomError;
        error.status = 400;
        next(error)
    }
    try {
        // TODO: group가입한 멤버들 돌면서 groups_in에서 삭제
        await Group.findOneAndRemove({ _id: id })
    } catch(err) {
        next(new Error('group cannot be deleted'))
    }

    res.status(200).json({ success: true })
})

export { router as deleteGroupRouter }