import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { BatchAssociateUserStackRequest, BatchAssociateUserStackResult } from "../models/models_0";
import {
  deserializeAws_json1_1BatchAssociateUserStackCommand,
  serializeAws_json1_1BatchAssociateUserStackCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface BatchAssociateUserStackCommandInput extends BatchAssociateUserStackRequest {}
export interface BatchAssociateUserStackCommandOutput extends BatchAssociateUserStackResult, __MetadataBearer {}

/**
 * <p>Associates the specified users with the specified stacks. Users in a user pool cannot be assigned to stacks with fleets that are joined to an Active Directory domain.</p>
 */
export class BatchAssociateUserStackCommand extends $Command<
  BatchAssociateUserStackCommandInput,
  BatchAssociateUserStackCommandOutput,
  AppStreamClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchAssociateUserStackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppStreamClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchAssociateUserStackCommandInput, BatchAssociateUserStackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppStreamClient";
    const commandName = "BatchAssociateUserStackCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchAssociateUserStackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchAssociateUserStackResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchAssociateUserStackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchAssociateUserStackCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchAssociateUserStackCommandOutput> {
    return deserializeAws_json1_1BatchAssociateUserStackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
