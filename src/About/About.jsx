import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <div>
          <Helmet><title>Complaints and Feedback </title></Helmet>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Complaints and Feedback</h1>
      <p className="py-6">
      We value your feedback and are committed to improving your experience. If you have a concern, complaint, or suggestion, please let us know. Our team is dedicated to addressing all issues as quickly as possible to ensure your satisfaction. You can submit a complaint using the form below, providing as much detail as possible to help us resolve the matter effectively. We appreciate your input, as it helps us create a better service for all our users.


      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Write Here</span>
          </label>
          <input type="text"className="input input-bordered h-40" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;