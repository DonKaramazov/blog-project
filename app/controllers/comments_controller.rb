class CommentsController < ApplicationController

  before_action :require_user, only: [:create]

  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.build(params.require(:comment).permit!)

    respond_to do |format|
     if @comment.save
       format.html { redirect_to @post, notice: 'Comment was successfully created.' }
       format.json { render :show, status: :created, location: @comment }
       format.js
     else
       format.html { render :new }
       format.json { render json: @comment.errors, status: :unprocessable_entity }
     end
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy

    redirect_to @comment.post
  end

  private

  def comment_param
    params.require(:comment).permit(:content)
  end
end
