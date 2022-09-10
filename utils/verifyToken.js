import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verfyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.jwt_token, (err, user) => {
    if (err) return next(createError(403, "Token not valid!"));
    req.user = user;
    next();
  });
};

export const veryUser = (req, res, next) => {
  verfyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      if (err) return next(createError(403, "You are not authorized"));
    }
  });
};

export const veryAdmin = (req, res, next) => {
    verfyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        if (err) return next(createError(403, "You are not authorized"));
      }
    });
  };
  