import yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup); // extend yup

import { emailField, passwordField, UUIDField } from './fields.js';

const signupSchema = yup.object({
    body: yup.object({
        email: emailField,
        emailVerificationToken: yup
            .string()
            .length(8)
            .required('email verification token is required field.'),
        username: yup.string().required('username is required field'),
        name: yup.string().required('name is required field'),
        birthdayDate: yup
            .date('birthdayDate must be in date format')
            .max(new Date(), 'birthdayDate must be in the past')
            .required('birthdayDate is required fieild'),
        password: passwordField,
    }),
});

const sendEmailVerificationSchema = yup.object({
    body: yup.object({
        email: emailField,
    }),
});

const checkEmailVerificationSchema = yup.object({
    params: yup.object({
        email: emailField,
        token: yup
            .string()
            .length(8)
            .required('email verification token is required field.'),
    }),
});

const forgetPasswordSchema = yup.object({
    body: yup.object({
        UUID: UUIDField,
    }),
});

const resetPasswordSchema = yup.object({
    body: yup.object({
        password: passwordField,
    }),
    params: yup.object({
        UUID: UUIDField,
        token: yup.string().length(8).required('reset token is required.'),
    }),
});

const loginSchema = yup.object({
    body: yup.object({
        UUID: UUIDField,
        password: passwordField,
    }),
});

export {
    sendEmailVerificationSchema,
    checkEmailVerificationSchema,
    forgetPasswordSchema,
    loginSchema,
    resetPasswordSchema,
    signupSchema,
};